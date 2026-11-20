const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, 'scraped_catalog.json');
const driveCatalogFile = path.join(__dirname, '../src/data/driveCatalog.ts');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

// Mapping of targets to folder IDs
const targetIdMap = {
  'grand-inauguration': '1EE4zjtobRAVtx7KKXFJFHgAq0bosrF4G',
  'welcoming-cm': '13RFZN5KIbD0MWlHRXotVUR0YGKrudHbK',
  'singing-marathon__day-01-03-11-2026': '1s1_BIyXCnZ0FuUD_wYPd_9u7-msrkHmU',
  'singing-marathon__day-02-04-11-2026': '1zFFwIMaTbPLURU0JqGjmFRE4-yIkTyFn',
  'singing-marathon__day-03-05-11-2026': '1evOLsxQekIiqJezZxyEMghw5gVm-zXDb',
  'singing-marathon__day-04-06-11-2026': '1kE6BfFl2Un_8BwPE6B_3VPixQC9X3nq6',
  'singing-marathon__day-05-07-11-2026': '14VgPRm7PWUdXT-MP84NH4ETQYjYdlObq',
  'singing-marathon__day-06-08-11-2026': '1ywg-NlvFeSIh_APZDwXt_hrlInfrnrel',
  'singing-marathon__day-07-09-11-2026': '1McqHDu3ZYK6BeLPgm8vEMcupzT_zVjVT',
  'singing-marathon__day-08-10-11-2026': '1I7E0v4iP4eLTVBbt-mrokVFlT_OD-kBV',
  'singing-marathon__day-09-11-11-2026': '1rHIQemeLpluBDytGIOnpfY7uZULDZ8_m',
  'singing-marathon__day-10-12-11-2026': '1onVC0Hz3j5Yk0TiZx4PSfcUgPVQJiVhS',
  'singing-marathon__day-11-13-11-2026': '1pLipdxcdo69SmNalZzZcqjHhtLrW8ufO',
  'singing-marathon__day-12-14-11-2026': '1gzsvmvHyaJA-ptQJPbDQ3nYeWfpB58Gk',
  'singing-marathon__day-13-15-11-2026': '1ghXI4naB2FxnSM0B2QO6ZXjheeNP03qZ',
  'symposium-felicitations__symposium-01-02': '1PauVrxOPB_sbf9r69Fh4bSTM3EH9jSzV',
  'symposium-felicitations__symposium-03-04': '1Wmwpv6uAaiLs4QnmILLGWClm2ksoEVzO',
  'symposium-felicitations__symposium-05-06': '1SvnsdO4grgre7xUV_5kwEyO6pXa4Ug8Q',
  'symposium-felicitations__symposium-07-08': '1EWpC0K0QzGaHPT0WD4LkuD_ZSB0D8N1q',
  'symposium-felicitations__symposium-09-10': '1dmGC7sYxHlcgrwxXKrcn9_Dqw8rL7Xl2',
  'symposium-felicitations__symposium-11-12': '11mXxNsFn21MJ8ZvE4PTUKRbjXLJTYghF',
  'valedictory-function': '1vNqKQlEpRwDYRBGsF1fuOxVp3x9yy-To',
  'cultural-exhibition': '1BgkA-smrAVbgeeEO3_N5xfakowMsjQ5S',
  'ful-fulota': '17oGRRZA1lXTtANvXJHq5Y-G-2wy1UMjY',
  'hall-of-fame': '1mJOHpsJisVRjXQN3j51arrqLASGj1leL'
};

// Reverse map: folderId -> photos
const photosByFolderId = {};
for (const [key, folderId] of Object.entries(targetIdMap)) {
  if (progress[key]) {
    photosByFolderId[folderId] = progress[key];
  }
}

const { ALBUMS_DATA, EVENT_DETAILS } = require(driveCatalogFile);

let grandTotalPhotos = 0;

const updatedAlbums = ALBUMS_DATA.map((album) => {
  if (album.hasSubfolders && album.subfolders) {
    let albumPhotos = [];
    const updatedSubfolders = album.subfolders.map((sf) => {
      const photos = photosByFolderId[sf.id] || sf.photos || [];
      albumPhotos.push(...photos);
      return {
        ...sf,
        photoCount: photos.length,
        coverPhoto: photos[0] || null,
        photos: photos
      };
    });

    grandTotalPhotos += albumPhotos.length;
    return {
      ...album,
      photoCount: albumPhotos.length,
      coverPhoto: albumPhotos[0] || null,
      photos: albumPhotos,
      subfolders: updatedSubfolders,
      hasLivePhotos: albumPhotos.length > 0
    };
  } else {
    const photos = photosByFolderId[album.id] || album.photos || [];
    grandTotalPhotos += photos.length;
    return {
      ...album,
      photoCount: photos.length,
      coverPhoto: photos[0] || null,
      photos: photos,
      hasLivePhotos: photos.length > 0
    };
  }
});

const updatedEventDetails = {
  ...EVENT_DETAILS,
  totalAlbums: updatedAlbums.length,
  totalPhotos: grandTotalPhotos,
  totalPhotosCount: grandTotalPhotos
};

const outputContent = `export interface PhotoItem {
  id: string;
  name: string;
  thumbUrl: string;
  previewUrl: string;
  fullUrl: string;
  downloadUrl: string;
  aspectRatio: string;
  caption?: string;
}

export interface SubfolderItem {
  id: string;
  name: string;
  slug: string;
  shortTitle: string;
  photoCount: number;
  coverPhoto: PhotoItem | null;
  photos: PhotoItem[];
}

export interface AlbumItem {
  id: string;
  name: string;
  slug: string;
  shortTitle: string;
  category: string;
  date: string;
  location: string;
  photographer: string;
  description: string;
  driveFolderUrl: string;
  photoCount: number;
  hasSubfolders: boolean;
  subfolderCount: number;
  subfolders?: SubfolderItem[];
  coverPhoto: PhotoItem | null;
  photos: PhotoItem[];
  isDriveConnected: boolean;
  year: number;
  hasLivePhotos: boolean;
}

export interface EventDetails {
  title: string;
  englishTitle: string;
  edition: string;
  status: string;
  theme: string;
  dates: string;
  venue: string;
  location: string;
  organizer: string;
  rootDriveFolderId: string;
  rootDriveUrl: string;
  brandColors: {
    plum: string;
    sunsetSaffron: string;
  };
  totalAlbums: number;
  totalPhotos: number;
  totalPhotosCount: number;
}

export const EVENT_DETAILS: EventDetails = ${JSON.stringify(updatedEventDetails, null, 2)};

export const ALBUMS_DATA: AlbumItem[] = ${JSON.stringify(updatedAlbums, null, 2)};
`;

fs.writeFileSync(driveCatalogFile, outputContent, 'utf8');
console.log(`SUCCESS! Total photos across entire catalog: ${grandTotalPhotos}`);
updatedAlbums.forEach(a => {
  console.log(`  - ${a.name}: ${a.photoCount} photos`);
});
