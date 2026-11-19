export interface PhotoItem {
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
  name: string;
  id: string;
  count: number;
  slug: string;
}

export interface AlbumItem {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  category: string;
  date: string;
  location: string;
  photographer: string;
  description: string;
  driveFolderUrl: string;
  photoCount: number;
  coverPhoto: PhotoItem | null;
  photos: PhotoItem[];
  isDriveConnected: boolean;
  year: number;
  hasLivePhotos: boolean;
  parentFolderId?: string;
  parentFolderName?: string;
  subfolders?: SubfolderItem[];
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

export const EVENT_DETAILS: EventDetails = {
  title: "1st World Konkani Music Mega Convention",
  englishTitle: "1st World Konkani Music Mega Convention",
  edition: "1st Edition (Active)",
  status: "Active",
  theme: "Preserving, Promoting & Celebrating Konkani Music Globally",
  dates: "03 - 15 Nov 2026",
  venue: "Kalaangann, Shakthinagar, Mangalore",
  location: "Kalaangann, Mangalore",
  organizer: "Mandd Sobhann",
  rootDriveFolderId: "1fIfUAY0tKdiR0gANkp1uemirdAFjK70h",
  rootDriveUrl: "https://drive.google.com/drive/folders/1fIfUAY0tKdiR0gANkp1uemirdAFjK70h?usp=sharing",
  brandColors: {
    plum: "#870069",
    sunsetSaffron: "#FF693C",
  },
  totalAlbums: 28,
  totalPhotos: 900,
  totalPhotosCount: 900,
};

export const ALBUMS_DATA: AlbumItem[] = [
  {
    "id": "1EE4zjtobRAVtx7KKXFJFHgAq0bosrF4G",
    "slug": "grand-inauguration",
    "name": "Grand Inauguration",
    "shortTitle": "Grand Inauguration",
    "category": "Convention Events",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo album for Grand Inauguration.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1EE4zjtobRAVtx7KKXFJFHgAq0bosrF4G",
    "photoCount": 50,
    "coverPhoto": {
      "id": "13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG",
      "name": "DSC_4570.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG",
        "name": "DSC_4570.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13fbrgP4XGynobt1FSiL2MXEdVaRl0NuG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QkV9G00awtGgmKJzhUChqW4DwbFiZf8O",
        "name": "DSC_4571.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QkV9G00awtGgmKJzhUChqW4DwbFiZf8O=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QkV9G00awtGgmKJzhUChqW4DwbFiZf8O=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QkV9G00awtGgmKJzhUChqW4DwbFiZf8O=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QkV9G00awtGgmKJzhUChqW4DwbFiZf8O",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u3bItMtwQt-I06a5Yphj_BqaeIWiVRiC",
        "name": "DSC_4572.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u3bItMtwQt-I06a5Yphj_BqaeIWiVRiC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u3bItMtwQt-I06a5Yphj_BqaeIWiVRiC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u3bItMtwQt-I06a5Yphj_BqaeIWiVRiC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u3bItMtwQt-I06a5Yphj_BqaeIWiVRiC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XsgSrV0F_ERaKFEuqXeML5NOWNmDQsLu",
        "name": "DSC_4573.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XsgSrV0F_ERaKFEuqXeML5NOWNmDQsLu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XsgSrV0F_ERaKFEuqXeML5NOWNmDQsLu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XsgSrV0F_ERaKFEuqXeML5NOWNmDQsLu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XsgSrV0F_ERaKFEuqXeML5NOWNmDQsLu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NPxBU7ViLwx3tQjhLJSnjE8qD82CqRlX",
        "name": "DSC_4574.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NPxBU7ViLwx3tQjhLJSnjE8qD82CqRlX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NPxBU7ViLwx3tQjhLJSnjE8qD82CqRlX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NPxBU7ViLwx3tQjhLJSnjE8qD82CqRlX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NPxBU7ViLwx3tQjhLJSnjE8qD82CqRlX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1whxXfricN_6qeW8VUXMdjOewXmGerkxv",
        "name": "DSC_4575.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1whxXfricN_6qeW8VUXMdjOewXmGerkxv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1whxXfricN_6qeW8VUXMdjOewXmGerkxv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1whxXfricN_6qeW8VUXMdjOewXmGerkxv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1whxXfricN_6qeW8VUXMdjOewXmGerkxv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1w2E3KnFXQdrkYRxuNvJUiKLlxp3GrPjS",
        "name": "DSC_4576.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1w2E3KnFXQdrkYRxuNvJUiKLlxp3GrPjS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1w2E3KnFXQdrkYRxuNvJUiKLlxp3GrPjS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1w2E3KnFXQdrkYRxuNvJUiKLlxp3GrPjS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1w2E3KnFXQdrkYRxuNvJUiKLlxp3GrPjS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eX0ihB-vlH4UC-0aPUPBhSI-ljVYbj71",
        "name": "DSC_4577.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eX0ihB-vlH4UC-0aPUPBhSI-ljVYbj71=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eX0ihB-vlH4UC-0aPUPBhSI-ljVYbj71=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eX0ihB-vlH4UC-0aPUPBhSI-ljVYbj71=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eX0ihB-vlH4UC-0aPUPBhSI-ljVYbj71",
        "aspectRatio": "3/2"
      },
      {
        "id": "15p0aqm9tm7sTUQRBqVwRFuu07VRzguLl",
        "name": "DSC_4578.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15p0aqm9tm7sTUQRBqVwRFuu07VRzguLl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15p0aqm9tm7sTUQRBqVwRFuu07VRzguLl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15p0aqm9tm7sTUQRBqVwRFuu07VRzguLl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15p0aqm9tm7sTUQRBqVwRFuu07VRzguLl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PvvsOpAvilxM07SKVb2bo_PBiMI6ZEbs",
        "name": "DSC_4579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PvvsOpAvilxM07SKVb2bo_PBiMI6ZEbs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PvvsOpAvilxM07SKVb2bo_PBiMI6ZEbs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PvvsOpAvilxM07SKVb2bo_PBiMI6ZEbs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PvvsOpAvilxM07SKVb2bo_PBiMI6ZEbs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1V2kDEm7yNbMb4OJnlDtakUwv6WNdeax8",
        "name": "DSC_4581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1V2kDEm7yNbMb4OJnlDtakUwv6WNdeax8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1V2kDEm7yNbMb4OJnlDtakUwv6WNdeax8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1V2kDEm7yNbMb4OJnlDtakUwv6WNdeax8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1V2kDEm7yNbMb4OJnlDtakUwv6WNdeax8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GlkkoUihFiLD8Ks34E-y_cXs1FxMEQw6",
        "name": "DSC_4582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GlkkoUihFiLD8Ks34E-y_cXs1FxMEQw6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GlkkoUihFiLD8Ks34E-y_cXs1FxMEQw6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GlkkoUihFiLD8Ks34E-y_cXs1FxMEQw6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GlkkoUihFiLD8Ks34E-y_cXs1FxMEQw6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZgqubOM0xkJAmRXpepjwnT_rLDkaDG6L",
        "name": "DSC_4583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZgqubOM0xkJAmRXpepjwnT_rLDkaDG6L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZgqubOM0xkJAmRXpepjwnT_rLDkaDG6L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZgqubOM0xkJAmRXpepjwnT_rLDkaDG6L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZgqubOM0xkJAmRXpepjwnT_rLDkaDG6L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GNowLtxc_6UUeqIP5Ef91E9P33YEqjco",
        "name": "DSC_4584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GNowLtxc_6UUeqIP5Ef91E9P33YEqjco=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GNowLtxc_6UUeqIP5Ef91E9P33YEqjco=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GNowLtxc_6UUeqIP5Ef91E9P33YEqjco=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GNowLtxc_6UUeqIP5Ef91E9P33YEqjco",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wLXqmyLpJqRByuOZZUBIwZ_4UBmv21dg",
        "name": "DSC_4585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wLXqmyLpJqRByuOZZUBIwZ_4UBmv21dg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wLXqmyLpJqRByuOZZUBIwZ_4UBmv21dg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wLXqmyLpJqRByuOZZUBIwZ_4UBmv21dg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wLXqmyLpJqRByuOZZUBIwZ_4UBmv21dg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IHwLz4UoBhdcFKo4n3184mwMidJVkN1w",
        "name": "DSC_4586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IHwLz4UoBhdcFKo4n3184mwMidJVkN1w=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IHwLz4UoBhdcFKo4n3184mwMidJVkN1w=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IHwLz4UoBhdcFKo4n3184mwMidJVkN1w=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IHwLz4UoBhdcFKo4n3184mwMidJVkN1w",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zY5MwuDHuxexKrrbLgaici1gn1aFKsor",
        "name": "DSC_4587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zY5MwuDHuxexKrrbLgaici1gn1aFKsor=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zY5MwuDHuxexKrrbLgaici1gn1aFKsor=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zY5MwuDHuxexKrrbLgaici1gn1aFKsor=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zY5MwuDHuxexKrrbLgaici1gn1aFKsor",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Jpo8kKv_fnZv9K5AcWpUuguztWVuhTAq",
        "name": "DSC_4588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Jpo8kKv_fnZv9K5AcWpUuguztWVuhTAq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Jpo8kKv_fnZv9K5AcWpUuguztWVuhTAq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Jpo8kKv_fnZv9K5AcWpUuguztWVuhTAq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Jpo8kKv_fnZv9K5AcWpUuguztWVuhTAq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1f4OFrcACK3Kz-XyP7wRzDXPA2d58-BD9",
        "name": "DSC_4589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1f4OFrcACK3Kz-XyP7wRzDXPA2d58-BD9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1f4OFrcACK3Kz-XyP7wRzDXPA2d58-BD9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1f4OFrcACK3Kz-XyP7wRzDXPA2d58-BD9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1f4OFrcACK3Kz-XyP7wRzDXPA2d58-BD9",
        "aspectRatio": "3/2"
      },
      {
        "id": "12LWqbWiI23iFkoUFbttL9TDEM_5Ls4z9",
        "name": "DSC_4590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12LWqbWiI23iFkoUFbttL9TDEM_5Ls4z9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12LWqbWiI23iFkoUFbttL9TDEM_5Ls4z9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12LWqbWiI23iFkoUFbttL9TDEM_5Ls4z9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12LWqbWiI23iFkoUFbttL9TDEM_5Ls4z9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZA4Fp4btqQUnfIjppakoTps61j_wHJ0q",
        "name": "DSC_4591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZA4Fp4btqQUnfIjppakoTps61j_wHJ0q=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZA4Fp4btqQUnfIjppakoTps61j_wHJ0q=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZA4Fp4btqQUnfIjppakoTps61j_wHJ0q=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZA4Fp4btqQUnfIjppakoTps61j_wHJ0q",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Mue4C0fkrLj0tt2Q6pOce4yKBzFa2Jyu",
        "name": "DSC_4592.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Mue4C0fkrLj0tt2Q6pOce4yKBzFa2Jyu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Mue4C0fkrLj0tt2Q6pOce4yKBzFa2Jyu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Mue4C0fkrLj0tt2Q6pOce4yKBzFa2Jyu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Mue4C0fkrLj0tt2Q6pOce4yKBzFa2Jyu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lJa2x7ui0GUyXWLy8ES8EE7Hp5B_Yi24",
        "name": "DSC_4593.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lJa2x7ui0GUyXWLy8ES8EE7Hp5B_Yi24=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lJa2x7ui0GUyXWLy8ES8EE7Hp5B_Yi24=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lJa2x7ui0GUyXWLy8ES8EE7Hp5B_Yi24=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lJa2x7ui0GUyXWLy8ES8EE7Hp5B_Yi24",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZqQVeB9NASCtO1ctPsZHHlktINU_x5oD",
        "name": "DSC_4594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZqQVeB9NASCtO1ctPsZHHlktINU_x5oD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZqQVeB9NASCtO1ctPsZHHlktINU_x5oD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZqQVeB9NASCtO1ctPsZHHlktINU_x5oD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZqQVeB9NASCtO1ctPsZHHlktINU_x5oD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nSFsktP9N7KuFpS6FWxmyknkCtMCbuiT",
        "name": "DSC_4595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nSFsktP9N7KuFpS6FWxmyknkCtMCbuiT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nSFsktP9N7KuFpS6FWxmyknkCtMCbuiT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nSFsktP9N7KuFpS6FWxmyknkCtMCbuiT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nSFsktP9N7KuFpS6FWxmyknkCtMCbuiT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XvLRUC8p4elVbyHCBbiLS14ybEZrAJtf",
        "name": "DSC_4596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XvLRUC8p4elVbyHCBbiLS14ybEZrAJtf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XvLRUC8p4elVbyHCBbiLS14ybEZrAJtf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XvLRUC8p4elVbyHCBbiLS14ybEZrAJtf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XvLRUC8p4elVbyHCBbiLS14ybEZrAJtf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1w0uq3TmuFswBA-Rs26I2AYS2vAx7SUyi",
        "name": "DSC_4597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1w0uq3TmuFswBA-Rs26I2AYS2vAx7SUyi=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1w0uq3TmuFswBA-Rs26I2AYS2vAx7SUyi=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1w0uq3TmuFswBA-Rs26I2AYS2vAx7SUyi=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1w0uq3TmuFswBA-Rs26I2AYS2vAx7SUyi",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Xci13w_GE3sMCc_f0ExYdJdr1-yBz-r8",
        "name": "DSC_4598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Xci13w_GE3sMCc_f0ExYdJdr1-yBz-r8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Xci13w_GE3sMCc_f0ExYdJdr1-yBz-r8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Xci13w_GE3sMCc_f0ExYdJdr1-yBz-r8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xci13w_GE3sMCc_f0ExYdJdr1-yBz-r8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rqPhU5dX8G3wrQJfqaoSOXNdpRukmjyl",
        "name": "DSC_4599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rqPhU5dX8G3wrQJfqaoSOXNdpRukmjyl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rqPhU5dX8G3wrQJfqaoSOXNdpRukmjyl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rqPhU5dX8G3wrQJfqaoSOXNdpRukmjyl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rqPhU5dX8G3wrQJfqaoSOXNdpRukmjyl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ApzV530nfYCN6mARfCX-QsiPTrKREmlA",
        "name": "DSC_4600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ApzV530nfYCN6mARfCX-QsiPTrKREmlA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ApzV530nfYCN6mARfCX-QsiPTrKREmlA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ApzV530nfYCN6mARfCX-QsiPTrKREmlA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ApzV530nfYCN6mARfCX-QsiPTrKREmlA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dgGTAxMxp0h0ddFEBzTjmq-I_7CayBRi",
        "name": "DSC_4601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dgGTAxMxp0h0ddFEBzTjmq-I_7CayBRi=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dgGTAxMxp0h0ddFEBzTjmq-I_7CayBRi=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dgGTAxMxp0h0ddFEBzTjmq-I_7CayBRi=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dgGTAxMxp0h0ddFEBzTjmq-I_7CayBRi",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sPmhMBAip-MIALhZaBTp2jvhAcATChi2",
        "name": "DSC_4602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sPmhMBAip-MIALhZaBTp2jvhAcATChi2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sPmhMBAip-MIALhZaBTp2jvhAcATChi2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sPmhMBAip-MIALhZaBTp2jvhAcATChi2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sPmhMBAip-MIALhZaBTp2jvhAcATChi2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gNvLNeXbAUcqJP03va5R8Iq-zeZqobk0",
        "name": "DSC_4603.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gNvLNeXbAUcqJP03va5R8Iq-zeZqobk0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gNvLNeXbAUcqJP03va5R8Iq-zeZqobk0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gNvLNeXbAUcqJP03va5R8Iq-zeZqobk0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gNvLNeXbAUcqJP03va5R8Iq-zeZqobk0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SKtUVX0exLIGxn4VpxvgGwkppv1FHd8W",
        "name": "DSC_4604.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SKtUVX0exLIGxn4VpxvgGwkppv1FHd8W=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SKtUVX0exLIGxn4VpxvgGwkppv1FHd8W=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SKtUVX0exLIGxn4VpxvgGwkppv1FHd8W=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SKtUVX0exLIGxn4VpxvgGwkppv1FHd8W",
        "aspectRatio": "3/2"
      },
      {
        "id": "1twRAR6oeg0lBmrOFxQsZHvmJdJRXOcJO",
        "name": "DSC_4605.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1twRAR6oeg0lBmrOFxQsZHvmJdJRXOcJO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1twRAR6oeg0lBmrOFxQsZHvmJdJRXOcJO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1twRAR6oeg0lBmrOFxQsZHvmJdJRXOcJO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1twRAR6oeg0lBmrOFxQsZHvmJdJRXOcJO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NPireVCyMQSs2PGtr-0kWNVWLZ8bzGjg",
        "name": "DSC_4606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NPireVCyMQSs2PGtr-0kWNVWLZ8bzGjg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NPireVCyMQSs2PGtr-0kWNVWLZ8bzGjg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NPireVCyMQSs2PGtr-0kWNVWLZ8bzGjg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NPireVCyMQSs2PGtr-0kWNVWLZ8bzGjg",
        "aspectRatio": "3/2"
      },
      {
        "id": "13CfcndB88DXlqkpOvv1cZXCSwBpbWmG2",
        "name": "DSC_4607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13CfcndB88DXlqkpOvv1cZXCSwBpbWmG2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13CfcndB88DXlqkpOvv1cZXCSwBpbWmG2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13CfcndB88DXlqkpOvv1cZXCSwBpbWmG2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13CfcndB88DXlqkpOvv1cZXCSwBpbWmG2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iIMA2_hCjefj1NtYvPt6p5dYT3f_-sg-",
        "name": "DSC_4608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iIMA2_hCjefj1NtYvPt6p5dYT3f_-sg-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iIMA2_hCjefj1NtYvPt6p5dYT3f_-sg-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iIMA2_hCjefj1NtYvPt6p5dYT3f_-sg-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iIMA2_hCjefj1NtYvPt6p5dYT3f_-sg-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GBr6ip-dkLmqpqeEpPc2vgq5cUBGppJD",
        "name": "DSC_4609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GBr6ip-dkLmqpqeEpPc2vgq5cUBGppJD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GBr6ip-dkLmqpqeEpPc2vgq5cUBGppJD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GBr6ip-dkLmqpqeEpPc2vgq5cUBGppJD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GBr6ip-dkLmqpqeEpPc2vgq5cUBGppJD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1L6D3C1T9M1JKW4gR6GZ3_FuYVOkxEql1",
        "name": "DSC_4610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L6D3C1T9M1JKW4gR6GZ3_FuYVOkxEql1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1L6D3C1T9M1JKW4gR6GZ3_FuYVOkxEql1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L6D3C1T9M1JKW4gR6GZ3_FuYVOkxEql1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1L6D3C1T9M1JKW4gR6GZ3_FuYVOkxEql1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T9xE4SXYL2tHn9oEWxe_2jMLcLJ6c15i",
        "name": "DSC_4611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T9xE4SXYL2tHn9oEWxe_2jMLcLJ6c15i=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T9xE4SXYL2tHn9oEWxe_2jMLcLJ6c15i=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T9xE4SXYL2tHn9oEWxe_2jMLcLJ6c15i=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T9xE4SXYL2tHn9oEWxe_2jMLcLJ6c15i",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kF_GU4XVu-2XM_vAaMiPi9CEQZRgpIZm",
        "name": "DSC_4612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kF_GU4XVu-2XM_vAaMiPi9CEQZRgpIZm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kF_GU4XVu-2XM_vAaMiPi9CEQZRgpIZm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kF_GU4XVu-2XM_vAaMiPi9CEQZRgpIZm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kF_GU4XVu-2XM_vAaMiPi9CEQZRgpIZm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JUWUq8P3Axwal3yf0KmjXBc-fKXzh1Ik",
        "name": "DSC_4613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JUWUq8P3Axwal3yf0KmjXBc-fKXzh1Ik=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JUWUq8P3Axwal3yf0KmjXBc-fKXzh1Ik=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JUWUq8P3Axwal3yf0KmjXBc-fKXzh1Ik=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JUWUq8P3Axwal3yf0KmjXBc-fKXzh1Ik",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Tvwr1lmSvIeRcblRymWujuxnpcNO502W",
        "name": "DSC_4614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Tvwr1lmSvIeRcblRymWujuxnpcNO502W=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Tvwr1lmSvIeRcblRymWujuxnpcNO502W=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Tvwr1lmSvIeRcblRymWujuxnpcNO502W=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Tvwr1lmSvIeRcblRymWujuxnpcNO502W",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BUnKt6jxv2YKrdNDWaey_oBeSZfOj9eC",
        "name": "DSC_4615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BUnKt6jxv2YKrdNDWaey_oBeSZfOj9eC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BUnKt6jxv2YKrdNDWaey_oBeSZfOj9eC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BUnKt6jxv2YKrdNDWaey_oBeSZfOj9eC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BUnKt6jxv2YKrdNDWaey_oBeSZfOj9eC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u240jZc1ziZ5MlwIPZtQlNrdZo0VCTUc",
        "name": "DSC_4616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u240jZc1ziZ5MlwIPZtQlNrdZo0VCTUc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u240jZc1ziZ5MlwIPZtQlNrdZo0VCTUc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u240jZc1ziZ5MlwIPZtQlNrdZo0VCTUc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u240jZc1ziZ5MlwIPZtQlNrdZo0VCTUc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1M3MdpqZiwQazsePhxWcM2-j5xNmiSrcj",
        "name": "DSC_4617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1M3MdpqZiwQazsePhxWcM2-j5xNmiSrcj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1M3MdpqZiwQazsePhxWcM2-j5xNmiSrcj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1M3MdpqZiwQazsePhxWcM2-j5xNmiSrcj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1M3MdpqZiwQazsePhxWcM2-j5xNmiSrcj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eeHQniDmqdb61iN5ACR3XGZWGlUXVAzW",
        "name": "DSC_4618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eeHQniDmqdb61iN5ACR3XGZWGlUXVAzW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eeHQniDmqdb61iN5ACR3XGZWGlUXVAzW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eeHQniDmqdb61iN5ACR3XGZWGlUXVAzW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eeHQniDmqdb61iN5ACR3XGZWGlUXVAzW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YbG-oAPZeBuIRFwIxWm67s-RoIVO9DET",
        "name": "DSC_4619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YbG-oAPZeBuIRFwIxWm67s-RoIVO9DET=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YbG-oAPZeBuIRFwIxWm67s-RoIVO9DET=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YbG-oAPZeBuIRFwIxWm67s-RoIVO9DET=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YbG-oAPZeBuIRFwIxWm67s-RoIVO9DET",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BhlyN95ppSlS7OL1fd8ncF66UnkUAI04",
        "name": "DSC_4620.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BhlyN95ppSlS7OL1fd8ncF66UnkUAI04=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BhlyN95ppSlS7OL1fd8ncF66UnkUAI04=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BhlyN95ppSlS7OL1fd8ncF66UnkUAI04=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BhlyN95ppSlS7OL1fd8ncF66UnkUAI04",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true
  },
  {
    "id": "13RFZN5KIbD0MWlHRXotVUR0YGKrudHbK",
    "slug": "welcoming-cm",
    "name": "Welcoming CM",
    "shortTitle": "Welcoming CM",
    "category": "Convention Events",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo album for Welcoming CM.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/13RFZN5KIbD0MWlHRXotVUR0YGKrudHbK",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1DJWczWq9nam2pLk8Robg_8As7qJMdf7k",
      "name": "DSC_7494.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1DJWczWq9nam2pLk8Robg_8As7qJMdf7k=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1DJWczWq9nam2pLk8Robg_8As7qJMdf7k=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1DJWczWq9nam2pLk8Robg_8As7qJMdf7k=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1DJWczWq9nam2pLk8Robg_8As7qJMdf7k",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1DJWczWq9nam2pLk8Robg_8As7qJMdf7k",
        "name": "DSC_7494.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DJWczWq9nam2pLk8Robg_8As7qJMdf7k=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DJWczWq9nam2pLk8Robg_8As7qJMdf7k=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DJWczWq9nam2pLk8Robg_8As7qJMdf7k=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DJWczWq9nam2pLk8Robg_8As7qJMdf7k",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c8WAnUCr3JlI6NxXfAi-4HtQtZLHc4WZ",
        "name": "DSC_7495.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c8WAnUCr3JlI6NxXfAi-4HtQtZLHc4WZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c8WAnUCr3JlI6NxXfAi-4HtQtZLHc4WZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c8WAnUCr3JlI6NxXfAi-4HtQtZLHc4WZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c8WAnUCr3JlI6NxXfAi-4HtQtZLHc4WZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1es60BBEa3obh8qgoOSbvXL9D81lLVvM4",
        "name": "DSC_7496.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1es60BBEa3obh8qgoOSbvXL9D81lLVvM4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1es60BBEa3obh8qgoOSbvXL9D81lLVvM4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1es60BBEa3obh8qgoOSbvXL9D81lLVvM4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1es60BBEa3obh8qgoOSbvXL9D81lLVvM4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wxBv0jANIt15t4sWx43L4mSy4wSG2Qar",
        "name": "DSC_7497.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wxBv0jANIt15t4sWx43L4mSy4wSG2Qar=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wxBv0jANIt15t4sWx43L4mSy4wSG2Qar=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wxBv0jANIt15t4sWx43L4mSy4wSG2Qar=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wxBv0jANIt15t4sWx43L4mSy4wSG2Qar",
        "aspectRatio": "3/2"
      },
      {
        "id": "15k4u06KJsW1lQxoiByFIsXUPjnutR2kU",
        "name": "DSC_7498.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15k4u06KJsW1lQxoiByFIsXUPjnutR2kU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15k4u06KJsW1lQxoiByFIsXUPjnutR2kU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15k4u06KJsW1lQxoiByFIsXUPjnutR2kU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15k4u06KJsW1lQxoiByFIsXUPjnutR2kU",
        "aspectRatio": "3/2"
      },
      {
        "id": "18bHAxxlkLtWRRxhA2sMw91Vz3pn0nsuk",
        "name": "DSC_7499.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18bHAxxlkLtWRRxhA2sMw91Vz3pn0nsuk=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18bHAxxlkLtWRRxhA2sMw91Vz3pn0nsuk=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18bHAxxlkLtWRRxhA2sMw91Vz3pn0nsuk=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18bHAxxlkLtWRRxhA2sMw91Vz3pn0nsuk",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MflVMHipYKiHwYp6Uj89FV7WN3VyBa5-",
        "name": "DSC_7500.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MflVMHipYKiHwYp6Uj89FV7WN3VyBa5-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MflVMHipYKiHwYp6Uj89FV7WN3VyBa5-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MflVMHipYKiHwYp6Uj89FV7WN3VyBa5-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MflVMHipYKiHwYp6Uj89FV7WN3VyBa5-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yMwL1ATybtXj06uwm0lC3BpRSiBB9qDx",
        "name": "DSC_7501.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yMwL1ATybtXj06uwm0lC3BpRSiBB9qDx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yMwL1ATybtXj06uwm0lC3BpRSiBB9qDx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yMwL1ATybtXj06uwm0lC3BpRSiBB9qDx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yMwL1ATybtXj06uwm0lC3BpRSiBB9qDx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pYT-wQ6z1sb8BD2kpW6XJpr67pCoy4Ch",
        "name": "DSC_7502.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pYT-wQ6z1sb8BD2kpW6XJpr67pCoy4Ch=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pYT-wQ6z1sb8BD2kpW6XJpr67pCoy4Ch=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pYT-wQ6z1sb8BD2kpW6XJpr67pCoy4Ch=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pYT-wQ6z1sb8BD2kpW6XJpr67pCoy4Ch",
        "aspectRatio": "3/2"
      },
      {
        "id": "1v4F40QMDgXjmV3cidnqdBEt94CzA4HCw",
        "name": "DSC_7503.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v4F40QMDgXjmV3cidnqdBEt94CzA4HCw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1v4F40QMDgXjmV3cidnqdBEt94CzA4HCw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v4F40QMDgXjmV3cidnqdBEt94CzA4HCw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v4F40QMDgXjmV3cidnqdBEt94CzA4HCw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y7S_BN5_U9W5LFdkhTrwnAm-CNjY2DaA",
        "name": "DSC_7504.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y7S_BN5_U9W5LFdkhTrwnAm-CNjY2DaA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y7S_BN5_U9W5LFdkhTrwnAm-CNjY2DaA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y7S_BN5_U9W5LFdkhTrwnAm-CNjY2DaA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y7S_BN5_U9W5LFdkhTrwnAm-CNjY2DaA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HsDTipf0MAsHQFsZGS_YgyYWOMfq6J8_",
        "name": "DSC_7505.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HsDTipf0MAsHQFsZGS_YgyYWOMfq6J8_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HsDTipf0MAsHQFsZGS_YgyYWOMfq6J8_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HsDTipf0MAsHQFsZGS_YgyYWOMfq6J8_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HsDTipf0MAsHQFsZGS_YgyYWOMfq6J8_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1R7bT8aX8OiLndpgIQ1lNeiJVgTejpW0z",
        "name": "DSC_7506.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1R7bT8aX8OiLndpgIQ1lNeiJVgTejpW0z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1R7bT8aX8OiLndpgIQ1lNeiJVgTejpW0z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1R7bT8aX8OiLndpgIQ1lNeiJVgTejpW0z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1R7bT8aX8OiLndpgIQ1lNeiJVgTejpW0z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tWUOrWJ1GWWHX-RezsLud4bfrk02ftyL",
        "name": "DSC_7507.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tWUOrWJ1GWWHX-RezsLud4bfrk02ftyL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tWUOrWJ1GWWHX-RezsLud4bfrk02ftyL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tWUOrWJ1GWWHX-RezsLud4bfrk02ftyL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tWUOrWJ1GWWHX-RezsLud4bfrk02ftyL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SgJWP96UUX59FVlHuxhXKM6o0NAaljBf",
        "name": "DSC_7508.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SgJWP96UUX59FVlHuxhXKM6o0NAaljBf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SgJWP96UUX59FVlHuxhXKM6o0NAaljBf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SgJWP96UUX59FVlHuxhXKM6o0NAaljBf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SgJWP96UUX59FVlHuxhXKM6o0NAaljBf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uemGXprxQAjBaDYTbkawVRotAwwIbR9A",
        "name": "DSC_7509.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uemGXprxQAjBaDYTbkawVRotAwwIbR9A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uemGXprxQAjBaDYTbkawVRotAwwIbR9A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uemGXprxQAjBaDYTbkawVRotAwwIbR9A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uemGXprxQAjBaDYTbkawVRotAwwIbR9A",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Sg9RiOFvT0hbjwU-tbbJ5Mx5MNQN0QLQ",
        "name": "DSC_7510.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Sg9RiOFvT0hbjwU-tbbJ5Mx5MNQN0QLQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Sg9RiOFvT0hbjwU-tbbJ5Mx5MNQN0QLQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Sg9RiOFvT0hbjwU-tbbJ5Mx5MNQN0QLQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Sg9RiOFvT0hbjwU-tbbJ5Mx5MNQN0QLQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LsulkapqV7INudjEwnI_4hFDlfogNOAW",
        "name": "DSC_7511.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LsulkapqV7INudjEwnI_4hFDlfogNOAW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LsulkapqV7INudjEwnI_4hFDlfogNOAW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LsulkapqV7INudjEwnI_4hFDlfogNOAW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LsulkapqV7INudjEwnI_4hFDlfogNOAW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TNrGjw1wuEGtQtS_sr22CN03dkyPQh9g",
        "name": "DSC_7512.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TNrGjw1wuEGtQtS_sr22CN03dkyPQh9g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TNrGjw1wuEGtQtS_sr22CN03dkyPQh9g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TNrGjw1wuEGtQtS_sr22CN03dkyPQh9g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TNrGjw1wuEGtQtS_sr22CN03dkyPQh9g",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UjMqKb2beiwbl2wy6IZESdXoiwrDOipc",
        "name": "DSC_7513.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UjMqKb2beiwbl2wy6IZESdXoiwrDOipc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UjMqKb2beiwbl2wy6IZESdXoiwrDOipc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UjMqKb2beiwbl2wy6IZESdXoiwrDOipc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UjMqKb2beiwbl2wy6IZESdXoiwrDOipc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HrP5ZRSKfKaV5iObFi1VWJRsn0KzdQhn",
        "name": "DSC_7514.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HrP5ZRSKfKaV5iObFi1VWJRsn0KzdQhn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HrP5ZRSKfKaV5iObFi1VWJRsn0KzdQhn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HrP5ZRSKfKaV5iObFi1VWJRsn0KzdQhn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HrP5ZRSKfKaV5iObFi1VWJRsn0KzdQhn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QZ5AbXjqrqmzHR68VKmUFRlKdbfs_bMo",
        "name": "DSC_7515.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QZ5AbXjqrqmzHR68VKmUFRlKdbfs_bMo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QZ5AbXjqrqmzHR68VKmUFRlKdbfs_bMo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QZ5AbXjqrqmzHR68VKmUFRlKdbfs_bMo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QZ5AbXjqrqmzHR68VKmUFRlKdbfs_bMo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Eb3WhayV-5zl5_YakXbd08wEGH4P3Rur",
        "name": "DSC_7516.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Eb3WhayV-5zl5_YakXbd08wEGH4P3Rur=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Eb3WhayV-5zl5_YakXbd08wEGH4P3Rur=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Eb3WhayV-5zl5_YakXbd08wEGH4P3Rur=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Eb3WhayV-5zl5_YakXbd08wEGH4P3Rur",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jMKmk9wfW9qhzvlC-bfiRLEdqq8Njaxg",
        "name": "DSC_7517.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jMKmk9wfW9qhzvlC-bfiRLEdqq8Njaxg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jMKmk9wfW9qhzvlC-bfiRLEdqq8Njaxg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jMKmk9wfW9qhzvlC-bfiRLEdqq8Njaxg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jMKmk9wfW9qhzvlC-bfiRLEdqq8Njaxg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HIVXMsPo9auSb2fB6E8oty2IWn90dllK",
        "name": "DSC_7518.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HIVXMsPo9auSb2fB6E8oty2IWn90dllK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HIVXMsPo9auSb2fB6E8oty2IWn90dllK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HIVXMsPo9auSb2fB6E8oty2IWn90dllK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HIVXMsPo9auSb2fB6E8oty2IWn90dllK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hPV7PSMxVmEQdeAKu8ySWAUltGcVhDLY",
        "name": "DSC_7519.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hPV7PSMxVmEQdeAKu8ySWAUltGcVhDLY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hPV7PSMxVmEQdeAKu8ySWAUltGcVhDLY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hPV7PSMxVmEQdeAKu8ySWAUltGcVhDLY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hPV7PSMxVmEQdeAKu8ySWAUltGcVhDLY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hJz_t9v8zxEhtTaPFJakCrVf6_GcQCVC",
        "name": "DSC_7520.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hJz_t9v8zxEhtTaPFJakCrVf6_GcQCVC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hJz_t9v8zxEhtTaPFJakCrVf6_GcQCVC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hJz_t9v8zxEhtTaPFJakCrVf6_GcQCVC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hJz_t9v8zxEhtTaPFJakCrVf6_GcQCVC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iRz8dLnrEAjEplcOIOH_sjXdb4EzS4Oy",
        "name": "DSC_7521.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iRz8dLnrEAjEplcOIOH_sjXdb4EzS4Oy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iRz8dLnrEAjEplcOIOH_sjXdb4EzS4Oy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iRz8dLnrEAjEplcOIOH_sjXdb4EzS4Oy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iRz8dLnrEAjEplcOIOH_sjXdb4EzS4Oy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vLz_NvxpnGhOFddWh5q88LxyLud9uBKz",
        "name": "DSC_7522.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vLz_NvxpnGhOFddWh5q88LxyLud9uBKz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vLz_NvxpnGhOFddWh5q88LxyLud9uBKz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vLz_NvxpnGhOFddWh5q88LxyLud9uBKz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vLz_NvxpnGhOFddWh5q88LxyLud9uBKz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1mN5tpJ0zqXRnurfBqiavSpg-5m5YcKZn",
        "name": "DSC_7523.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mN5tpJ0zqXRnurfBqiavSpg-5m5YcKZn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1mN5tpJ0zqXRnurfBqiavSpg-5m5YcKZn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mN5tpJ0zqXRnurfBqiavSpg-5m5YcKZn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mN5tpJ0zqXRnurfBqiavSpg-5m5YcKZn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iW3hkk9OwJU-qKTorXGOObK1ppHdPhPT",
        "name": "DSC_7524.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iW3hkk9OwJU-qKTorXGOObK1ppHdPhPT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iW3hkk9OwJU-qKTorXGOObK1ppHdPhPT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iW3hkk9OwJU-qKTorXGOObK1ppHdPhPT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iW3hkk9OwJU-qKTorXGOObK1ppHdPhPT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gCexqdz_fxTf-u7tG8KUGT6G1i0_2xqW",
        "name": "DSC_7525.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gCexqdz_fxTf-u7tG8KUGT6G1i0_2xqW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gCexqdz_fxTf-u7tG8KUGT6G1i0_2xqW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gCexqdz_fxTf-u7tG8KUGT6G1i0_2xqW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gCexqdz_fxTf-u7tG8KUGT6G1i0_2xqW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KzpsdRPFEmfwdjngMsJ7Q58czJhKecPJ",
        "name": "DSC_7526.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KzpsdRPFEmfwdjngMsJ7Q58czJhKecPJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KzpsdRPFEmfwdjngMsJ7Q58czJhKecPJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KzpsdRPFEmfwdjngMsJ7Q58czJhKecPJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KzpsdRPFEmfwdjngMsJ7Q58czJhKecPJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hElokBknyWtHbzDoihf-UWZw1XwbVkBu",
        "name": "DSC_7527.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hElokBknyWtHbzDoihf-UWZw1XwbVkBu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hElokBknyWtHbzDoihf-UWZw1XwbVkBu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hElokBknyWtHbzDoihf-UWZw1XwbVkBu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hElokBknyWtHbzDoihf-UWZw1XwbVkBu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yB_Xwm0sxwQgRPjhY66YEyHm89vrY2g0",
        "name": "DSC_7528.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yB_Xwm0sxwQgRPjhY66YEyHm89vrY2g0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yB_Xwm0sxwQgRPjhY66YEyHm89vrY2g0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yB_Xwm0sxwQgRPjhY66YEyHm89vrY2g0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yB_Xwm0sxwQgRPjhY66YEyHm89vrY2g0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XOx202LafFFvmxoGmz3LguHAGMYzxnzs",
        "name": "DSC_7529.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XOx202LafFFvmxoGmz3LguHAGMYzxnzs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XOx202LafFFvmxoGmz3LguHAGMYzxnzs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XOx202LafFFvmxoGmz3LguHAGMYzxnzs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XOx202LafFFvmxoGmz3LguHAGMYzxnzs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K4t5MapqUJ4DmyFhbodxGycYhOOdKSYm",
        "name": "DSC_7530.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K4t5MapqUJ4DmyFhbodxGycYhOOdKSYm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K4t5MapqUJ4DmyFhbodxGycYhOOdKSYm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K4t5MapqUJ4DmyFhbodxGycYhOOdKSYm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K4t5MapqUJ4DmyFhbodxGycYhOOdKSYm",
        "aspectRatio": "3/2"
      },
      {
        "id": "17RRn-vEpdhIxXqCxBal6ImFf8CztXbLd",
        "name": "DSC_7531.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17RRn-vEpdhIxXqCxBal6ImFf8CztXbLd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17RRn-vEpdhIxXqCxBal6ImFf8CztXbLd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17RRn-vEpdhIxXqCxBal6ImFf8CztXbLd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17RRn-vEpdhIxXqCxBal6ImFf8CztXbLd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jReTb-8CLsWnmkFixG1k7otiHrqD6-5L",
        "name": "DSC_7532.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jReTb-8CLsWnmkFixG1k7otiHrqD6-5L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jReTb-8CLsWnmkFixG1k7otiHrqD6-5L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jReTb-8CLsWnmkFixG1k7otiHrqD6-5L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jReTb-8CLsWnmkFixG1k7otiHrqD6-5L",
        "aspectRatio": "3/2"
      },
      {
        "id": "16soWp9WGCiyKXX7W4p9IMpBXs1nmozpn",
        "name": "DSC_7533.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16soWp9WGCiyKXX7W4p9IMpBXs1nmozpn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16soWp9WGCiyKXX7W4p9IMpBXs1nmozpn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16soWp9WGCiyKXX7W4p9IMpBXs1nmozpn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16soWp9WGCiyKXX7W4p9IMpBXs1nmozpn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wXuWUKRySFbY2WGWlAgD0gk2Syz-1dNd",
        "name": "DSC_7534.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wXuWUKRySFbY2WGWlAgD0gk2Syz-1dNd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wXuWUKRySFbY2WGWlAgD0gk2Syz-1dNd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wXuWUKRySFbY2WGWlAgD0gk2Syz-1dNd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wXuWUKRySFbY2WGWlAgD0gk2Syz-1dNd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Z7Bogwfmt9Pw5gSBT5YSE5_pmF9EguXy",
        "name": "DSC_7535.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Z7Bogwfmt9Pw5gSBT5YSE5_pmF9EguXy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Z7Bogwfmt9Pw5gSBT5YSE5_pmF9EguXy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Z7Bogwfmt9Pw5gSBT5YSE5_pmF9EguXy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Z7Bogwfmt9Pw5gSBT5YSE5_pmF9EguXy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VFnCjr81HLHNSAWDQs5p9K_NH5N5Iub7",
        "name": "DSC_7536.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VFnCjr81HLHNSAWDQs5p9K_NH5N5Iub7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VFnCjr81HLHNSAWDQs5p9K_NH5N5Iub7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VFnCjr81HLHNSAWDQs5p9K_NH5N5Iub7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VFnCjr81HLHNSAWDQs5p9K_NH5N5Iub7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Veu8YkN9WT-4qIvlvsdstHxqcs_BKp3v",
        "name": "DSC_7537.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Veu8YkN9WT-4qIvlvsdstHxqcs_BKp3v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Veu8YkN9WT-4qIvlvsdstHxqcs_BKp3v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Veu8YkN9WT-4qIvlvsdstHxqcs_BKp3v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Veu8YkN9WT-4qIvlvsdstHxqcs_BKp3v",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XkBmseyrpI4MK8uZV_5DfmIiNR2Rtfyv",
        "name": "DSC_7538.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XkBmseyrpI4MK8uZV_5DfmIiNR2Rtfyv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XkBmseyrpI4MK8uZV_5DfmIiNR2Rtfyv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XkBmseyrpI4MK8uZV_5DfmIiNR2Rtfyv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XkBmseyrpI4MK8uZV_5DfmIiNR2Rtfyv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Af0GKx6Rmh1Wu6QcLbKPcK5sYAq1JIKQ",
        "name": "DSC_7539.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Af0GKx6Rmh1Wu6QcLbKPcK5sYAq1JIKQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Af0GKx6Rmh1Wu6QcLbKPcK5sYAq1JIKQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Af0GKx6Rmh1Wu6QcLbKPcK5sYAq1JIKQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Af0GKx6Rmh1Wu6QcLbKPcK5sYAq1JIKQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "14L8kqWJw-aepYIZrPUaeebVkOWU2EMFd",
        "name": "DSC_7540.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14L8kqWJw-aepYIZrPUaeebVkOWU2EMFd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14L8kqWJw-aepYIZrPUaeebVkOWU2EMFd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14L8kqWJw-aepYIZrPUaeebVkOWU2EMFd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14L8kqWJw-aepYIZrPUaeebVkOWU2EMFd",
        "aspectRatio": "3/2"
      },
      {
        "id": "13m5dZ5U8Skm_sTuxvBP7WoDnqzN3xlwg",
        "name": "DSC_7541.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13m5dZ5U8Skm_sTuxvBP7WoDnqzN3xlwg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13m5dZ5U8Skm_sTuxvBP7WoDnqzN3xlwg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13m5dZ5U8Skm_sTuxvBP7WoDnqzN3xlwg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13m5dZ5U8Skm_sTuxvBP7WoDnqzN3xlwg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1M3_6c57dAHcv_-7NbvzGaSoASvISVszl",
        "name": "DSC_7542.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1M3_6c57dAHcv_-7NbvzGaSoASvISVszl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1M3_6c57dAHcv_-7NbvzGaSoASvISVszl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1M3_6c57dAHcv_-7NbvzGaSoASvISVszl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1M3_6c57dAHcv_-7NbvzGaSoASvISVszl",
        "aspectRatio": "3/2"
      },
      {
        "id": "10Dd_PEc8hA4f4RgqtXZOEHtGbbQ0fDac",
        "name": "DSC_7543.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10Dd_PEc8hA4f4RgqtXZOEHtGbbQ0fDac=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10Dd_PEc8hA4f4RgqtXZOEHtGbbQ0fDac=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10Dd_PEc8hA4f4RgqtXZOEHtGbbQ0fDac=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10Dd_PEc8hA4f4RgqtXZOEHtGbbQ0fDac",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true
  },
  {
    "id": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "slug": "guinness-world-records-singing-marathon-day-01-to-day-13",
    "name": "Guinness World Records Singing Marathon (Day 01 to Day 13)",
    "shortTitle": "Guinness World Records Singing Marathon",
    "category": "Main Convention",
    "date": "03 - 15 Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo documentation for Guinness World Records Singing Marathon (Day 01 to Day 13) with 13 sub-sessions.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "photoCount": 650,
    "coverPhoto": {
      "id": "1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
      "name": "AVDM1831.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
        "name": "AVDM1831.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vskZY3g44bicawPCIRgwzLH4pc0oAMjF",
        "name": "AVDM1832.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vskZY3g44bicawPCIRgwzLH4pc0oAMjF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vskZY3g44bicawPCIRgwzLH4pc0oAMjF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vskZY3g44bicawPCIRgwzLH4pc0oAMjF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vskZY3g44bicawPCIRgwzLH4pc0oAMjF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HtWiU42TMCJP1fX5di_xubPPKPj20ro1",
        "name": "AVDM1833.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HtWiU42TMCJP1fX5di_xubPPKPj20ro1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HtWiU42TMCJP1fX5di_xubPPKPj20ro1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HtWiU42TMCJP1fX5di_xubPPKPj20ro1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HtWiU42TMCJP1fX5di_xubPPKPj20ro1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1C52GMMtHock41FWWYAWNxkYWOMdBsFhF",
        "name": "AVDM1834.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1C52GMMtHock41FWWYAWNxkYWOMdBsFhF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1C52GMMtHock41FWWYAWNxkYWOMdBsFhF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1C52GMMtHock41FWWYAWNxkYWOMdBsFhF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1C52GMMtHock41FWWYAWNxkYWOMdBsFhF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF",
        "name": "AVDM1835.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP",
        "name": "AVDM1836.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn",
        "name": "AVDM1837.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8",
        "name": "AVDM1838.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o",
        "name": "AVDM1839.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf",
        "name": "AVDM1840.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U",
        "name": "AVDM1841.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu",
        "name": "AVDM1842.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF",
        "name": "AVDM1843.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4",
        "name": "AVDM1844.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb",
        "name": "AVDM1845.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9",
        "name": "AVDM1846.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_",
        "name": "AVDM1847.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC",
        "name": "AVDM1848.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT",
        "name": "AVDM1849.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v",
        "name": "AVDM1850.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV",
        "name": "AVDM1851.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ",
        "name": "AVDM1852.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp",
        "name": "AVDM1853.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9",
        "name": "AVDM1854.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC",
        "name": "AVDM1855.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC",
        "aspectRatio": "3/2"
      },
      {
        "id": "13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y",
        "name": "AVDM1856.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro",
        "name": "AVDM1857.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J",
        "name": "AVDM1858.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z",
        "name": "AVDM1859.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51",
        "name": "AVDM1860.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis",
        "name": "AVDM1861.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK",
        "name": "AVDM1862.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl",
        "name": "AVDM1863.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv",
        "name": "AVDM1864.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-",
        "name": "AVDM1865.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd",
        "name": "AVDM1866.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe",
        "name": "AVDM1867.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN",
        "name": "AVDM1868.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz",
        "name": "AVDM1869.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB",
        "name": "AVDM1870.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y",
        "name": "AVDM1871.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y",
        "name": "AVDM1872.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG",
        "name": "AVDM1873.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG",
        "aspectRatio": "3/2"
      },
      {
        "id": "10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD",
        "name": "AVDM1874.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ojuUUV80SzzW84PDd1CzSFj6iudDsumr",
        "name": "AVDM1875.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ojuUUV80SzzW84PDd1CzSFj6iudDsumr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ojuUUV80SzzW84PDd1CzSFj6iudDsumr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ojuUUV80SzzW84PDd1CzSFj6iudDsumr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ojuUUV80SzzW84PDd1CzSFj6iudDsumr",
        "aspectRatio": "3/2"
      },
      {
        "id": "12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX",
        "name": "AVDM1876.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy",
        "name": "AVDM1877.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8",
        "name": "AVDM1878.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO",
        "name": "AVDM1879.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t",
        "name": "AVDM1880.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ",
        "name": "AVDM0001.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF",
        "name": "AVDM0002.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ",
        "name": "AVDM0003.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ",
        "name": "AVDM0004.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SELd2vPqn23zT00aMSn6toUFKBxndkJz",
        "name": "AVDM0005.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SELd2vPqn23zT00aMSn6toUFKBxndkJz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SELd2vPqn23zT00aMSn6toUFKBxndkJz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SELd2vPqn23zT00aMSn6toUFKBxndkJz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SELd2vPqn23zT00aMSn6toUFKBxndkJz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab",
        "name": "AVDM0006.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W",
        "name": "AVDM0007.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ac_g8k-gpMytpcDplR8-McuYXhehUVMe",
        "name": "AVDM0008.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ac_g8k-gpMytpcDplR8-McuYXhehUVMe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ac_g8k-gpMytpcDplR8-McuYXhehUVMe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ac_g8k-gpMytpcDplR8-McuYXhehUVMe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ac_g8k-gpMytpcDplR8-McuYXhehUVMe",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA",
        "name": "AVDM0009.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd",
        "name": "AVDM0010.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE",
        "name": "AVDM0011.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B",
        "name": "AVDM0012.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9",
        "name": "AVDM0013.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yYIb6LLyBjgJMlsH05ScwFuGwM-po966",
        "name": "AVDM0014.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yYIb6LLyBjgJMlsH05ScwFuGwM-po966=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yYIb6LLyBjgJMlsH05ScwFuGwM-po966=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yYIb6LLyBjgJMlsH05ScwFuGwM-po966=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yYIb6LLyBjgJMlsH05ScwFuGwM-po966",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw",
        "name": "AVDM0015.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI",
        "name": "AVDM0016.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI",
        "aspectRatio": "3/2"
      },
      {
        "id": "10nj9ZscroosycgZhhgn-SBuVgghCxhWP",
        "name": "AVDM0017.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10nj9ZscroosycgZhhgn-SBuVgghCxhWP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10nj9ZscroosycgZhhgn-SBuVgghCxhWP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10nj9ZscroosycgZhhgn-SBuVgghCxhWP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10nj9ZscroosycgZhhgn-SBuVgghCxhWP",
        "aspectRatio": "3/2"
      },
      {
        "id": "13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T",
        "name": "AVDM0018.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T",
        "aspectRatio": "3/2"
      },
      {
        "id": "1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e",
        "name": "AVDM0019.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN",
        "name": "AVDM0020.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx",
        "name": "AVDM0021.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr",
        "name": "AVDM0022.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cmDAgZybgncaU20WXGTzbewuToHp8lSd",
        "name": "AVDM0023.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cmDAgZybgncaU20WXGTzbewuToHp8lSd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cmDAgZybgncaU20WXGTzbewuToHp8lSd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cmDAgZybgncaU20WXGTzbewuToHp8lSd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cmDAgZybgncaU20WXGTzbewuToHp8lSd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ",
        "name": "AVDM0024.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT",
        "name": "AVDM0025.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9",
        "name": "AVDM0026.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF",
        "name": "AVDM0027.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC",
        "name": "AVDM0028.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN",
        "name": "AVDM0029.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj",
        "name": "AVDM0030.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl",
        "name": "AVDM0031.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt",
        "name": "AVDM0032.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt",
        "aspectRatio": "3/2"
      },
      {
        "id": "15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H",
        "name": "AVDM0033.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XvNU-k58a83uElOccfqLD-QzHQDQWeWs",
        "name": "AVDM0034.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XvNU-k58a83uElOccfqLD-QzHQDQWeWs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XvNU-k58a83uElOccfqLD-QzHQDQWeWs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XvNU-k58a83uElOccfqLD-QzHQDQWeWs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XvNU-k58a83uElOccfqLD-QzHQDQWeWs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU",
        "name": "AVDM0035.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1",
        "name": "AVDM0036.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV",
        "name": "AVDM0037.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a",
        "name": "AVDM0038.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i",
        "name": "AVDM0039.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn",
        "name": "AVDM0040.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DPY9euoft16LtxXc1wRcOQcyRDyQatgt",
        "name": "AVDM0041.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DPY9euoft16LtxXc1wRcOQcyRDyQatgt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DPY9euoft16LtxXc1wRcOQcyRDyQatgt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DPY9euoft16LtxXc1wRcOQcyRDyQatgt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DPY9euoft16LtxXc1wRcOQcyRDyQatgt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CYePYCTMMljNDbE4XABOwnpdShSkfev6",
        "name": "AVDM0042.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CYePYCTMMljNDbE4XABOwnpdShSkfev6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CYePYCTMMljNDbE4XABOwnpdShSkfev6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CYePYCTMMljNDbE4XABOwnpdShSkfev6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CYePYCTMMljNDbE4XABOwnpdShSkfev6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE",
        "name": "AVDM0043.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE",
        "aspectRatio": "3/2"
      },
      {
        "id": "12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR",
        "name": "AVDM0044.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU",
        "name": "AVDM0045.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU",
        "aspectRatio": "3/2"
      },
      {
        "id": "19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT",
        "name": "AVDM0046.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q",
        "name": "AVDM0047.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q",
        "aspectRatio": "3/2"
      },
      {
        "id": "16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc",
        "name": "AVDM0048.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2",
        "name": "AVDM0049.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hXg556g3iWMn7CCC3S-efA8oATf48gZx",
        "name": "AVDM0050.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hXg556g3iWMn7CCC3S-efA8oATf48gZx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hXg556g3iWMn7CCC3S-efA8oATf48gZx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hXg556g3iWMn7CCC3S-efA8oATf48gZx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hXg556g3iWMn7CCC3S-efA8oATf48gZx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY",
        "name": "DSC_5571.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB",
        "name": "DSC_5572.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-",
        "name": "DSC_5574.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe",
        "name": "DSC_5575.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe",
        "aspectRatio": "3/2"
      },
      {
        "id": "18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK",
        "name": "DSC_5576.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3",
        "name": "DSC_5577.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9",
        "name": "DSC_5578.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x",
        "name": "DSC_5579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq",
        "name": "DSC_5580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO",
        "name": "DSC_5581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg",
        "name": "DSC_5582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87",
        "name": "DSC_5583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr",
        "name": "DSC_5584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c",
        "name": "DSC_5585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8",
        "name": "DSC_5586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ",
        "name": "DSC_5587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4",
        "name": "DSC_5588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ",
        "name": "DSC_5589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "11io6vkxQ7avHV3V9AvDvZifGqruUBN7q",
        "name": "DSC_5590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11io6vkxQ7avHV3V9AvDvZifGqruUBN7q=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11io6vkxQ7avHV3V9AvDvZifGqruUBN7q=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11io6vkxQ7avHV3V9AvDvZifGqruUBN7q=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11io6vkxQ7avHV3V9AvDvZifGqruUBN7q",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K",
        "name": "DSC_5591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L",
        "name": "DSC_5594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao",
        "name": "DSC_5596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao",
        "aspectRatio": "3/2"
      },
      {
        "id": "1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV",
        "name": "DSC_5597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB",
        "name": "DSC_5598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1",
        "name": "DSC_5599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA",
        "name": "DSC_5600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h",
        "name": "DSC_5601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9",
        "name": "DSC_5602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7",
        "name": "DSC_5603.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld",
        "name": "DSC_5604.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld",
        "aspectRatio": "3/2"
      },
      {
        "id": "1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw",
        "name": "DSC_5605.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm",
        "name": "DSC_5606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6",
        "name": "DSC_5607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516",
        "name": "DSC_5608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1",
        "name": "DSC_5609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M",
        "name": "DSC_5610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M",
        "aspectRatio": "3/2"
      },
      {
        "id": "1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8",
        "name": "DSC_5611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX",
        "name": "DSC_5612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV",
        "name": "DSC_5613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz",
        "name": "DSC_5614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22",
        "name": "DSC_5615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K",
        "name": "DSC_5616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97",
        "name": "DSC_5617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4",
        "name": "DSC_5618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4",
        "aspectRatio": "3/2"
      },
      {
        "id": "109yCvyC_xbFoW9epjJ1oSMOJbthsig6s",
        "name": "DSC_5619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/109yCvyC_xbFoW9epjJ1oSMOJbthsig6s=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/109yCvyC_xbFoW9epjJ1oSMOJbthsig6s=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/109yCvyC_xbFoW9epjJ1oSMOJbthsig6s=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=109yCvyC_xbFoW9epjJ1oSMOJbthsig6s",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj",
        "name": "DSC_5620.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj",
        "aspectRatio": "3/2"
      },
      {
        "id": "12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn",
        "name": "DSC_5621.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv",
        "name": "DSC_5622.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh",
        "name": "DSC_5623.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM",
        "name": "DSC_5624.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w",
        "name": "AVDM0606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM",
        "name": "AVDM0607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm",
        "name": "AVDM0608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JON96TcjPWSre4Bok5yDNyc1U1nj0x17",
        "name": "AVDM0609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JON96TcjPWSre4Bok5yDNyc1U1nj0x17=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JON96TcjPWSre4Bok5yDNyc1U1nj0x17=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JON96TcjPWSre4Bok5yDNyc1U1nj0x17=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JON96TcjPWSre4Bok5yDNyc1U1nj0x17",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ",
        "name": "AVDM0610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678",
        "name": "AVDM0611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn",
        "name": "AVDM0612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA",
        "name": "AVDM0613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7",
        "name": "AVDM0614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uJypfBduBprfmZdZdXit-nnxjEGDVHZp",
        "name": "AVDM0615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uJypfBduBprfmZdZdXit-nnxjEGDVHZp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uJypfBduBprfmZdZdXit-nnxjEGDVHZp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uJypfBduBprfmZdZdXit-nnxjEGDVHZp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uJypfBduBprfmZdZdXit-nnxjEGDVHZp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP",
        "name": "AVDM0616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm",
        "name": "AVDM0617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY",
        "name": "AVDM0618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9",
        "name": "AVDM0619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB",
        "name": "AVDM0620.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u",
        "name": "AVDM0621.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u",
        "aspectRatio": "3/2"
      },
      {
        "id": "1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y",
        "name": "AVDM0622.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM",
        "name": "AVDM0623.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm",
        "name": "AVDM0624.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm",
        "aspectRatio": "3/2"
      },
      {
        "id": "13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg",
        "name": "AVDM0625.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_",
        "name": "AVDM0626.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LSF7MqSciyN9vMNdss873Rrau_o94bJb",
        "name": "AVDM0627.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LSF7MqSciyN9vMNdss873Rrau_o94bJb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LSF7MqSciyN9vMNdss873Rrau_o94bJb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LSF7MqSciyN9vMNdss873Rrau_o94bJb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LSF7MqSciyN9vMNdss873Rrau_o94bJb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sUaJezu92f-V4Ldy0RaajeciwSWeBadO",
        "name": "AVDM0628.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sUaJezu92f-V4Ldy0RaajeciwSWeBadO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sUaJezu92f-V4Ldy0RaajeciwSWeBadO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sUaJezu92f-V4Ldy0RaajeciwSWeBadO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sUaJezu92f-V4Ldy0RaajeciwSWeBadO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV",
        "name": "AVDM0629.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh",
        "name": "AVDM0630.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh",
        "aspectRatio": "3/2"
      },
      {
        "id": "19AMiEY-hY942p0UQPFCvYvbph0m8Y99a",
        "name": "AVDM0631.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19AMiEY-hY942p0UQPFCvYvbph0m8Y99a=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19AMiEY-hY942p0UQPFCvYvbph0m8Y99a=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19AMiEY-hY942p0UQPFCvYvbph0m8Y99a=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19AMiEY-hY942p0UQPFCvYvbph0m8Y99a",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX",
        "name": "AVDM0632.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c1d0WlXsNo2D3RH780qonu_fArmHXSyy",
        "name": "AVDM0633.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c1d0WlXsNo2D3RH780qonu_fArmHXSyy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c1d0WlXsNo2D3RH780qonu_fArmHXSyy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c1d0WlXsNo2D3RH780qonu_fArmHXSyy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c1d0WlXsNo2D3RH780qonu_fArmHXSyy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa",
        "name": "AVDM0634.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj",
        "name": "AVDM0635.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2",
        "name": "AVDM0636.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP",
        "name": "AVDM0637.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP",
        "aspectRatio": "3/2"
      },
      {
        "id": "17J0UYQBdXIUPsPq6nwCid__KKBwMui6z",
        "name": "AVDM0638.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17J0UYQBdXIUPsPq6nwCid__KKBwMui6z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17J0UYQBdXIUPsPq6nwCid__KKBwMui6z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17J0UYQBdXIUPsPq6nwCid__KKBwMui6z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17J0UYQBdXIUPsPq6nwCid__KKBwMui6z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa",
        "name": "AVDM0639.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa",
        "aspectRatio": "3/2"
      },
      {
        "id": "18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr",
        "name": "AVDM0640.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz",
        "name": "AVDM0641.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX",
        "name": "AVDM0642.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1",
        "name": "AVDM0643.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk",
        "name": "AVDM0644.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO",
        "name": "AVDM0645.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo",
        "name": "AVDM0646.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR",
        "name": "AVDM0647.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR",
        "aspectRatio": "3/2"
      },
      {
        "id": "15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah",
        "name": "AVDM0648.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS",
        "name": "AVDM0649.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT",
        "name": "AVDM0650.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv",
        "name": "AVDM0651.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF",
        "name": "AVDM0652.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82",
        "name": "AVDM0653.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd",
        "name": "AVDM0654.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35",
        "name": "AVDM0655.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35",
        "aspectRatio": "3/2"
      },
      {
        "id": "1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ",
        "name": "DSC_0810.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-",
        "name": "DSC_0811.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO",
        "name": "DSC_0812.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm",
        "name": "DSC_0813.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY",
        "name": "DSC_0814.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW",
        "name": "DSC_0815.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1mxrrIr-VWj50EVkk0YVt19uEowuKtfks",
        "name": "DSC_0816.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mxrrIr-VWj50EVkk0YVt19uEowuKtfks=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1mxrrIr-VWj50EVkk0YVt19uEowuKtfks=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mxrrIr-VWj50EVkk0YVt19uEowuKtfks=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mxrrIr-VWj50EVkk0YVt19uEowuKtfks",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC",
        "name": "DSC_0817.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd",
        "name": "DSC_0818.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8",
        "name": "DSC_0819.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc",
        "name": "DSC_0820.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj",
        "name": "DSC_0822.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg",
        "name": "DSC_0823.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX",
        "name": "DSC_0824.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk",
        "name": "DSC_0825.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm",
        "name": "DSC_0826.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1",
        "name": "DSC_0828.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs",
        "name": "DSC_0829.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs",
        "aspectRatio": "3/2"
      },
      {
        "id": "11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l",
        "name": "DSC_0830.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n",
        "name": "DSC_0832.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n",
        "aspectRatio": "3/2"
      },
      {
        "id": "16zVx3igmApyEigb6HMPLcdVzDFD8tVGi",
        "name": "DSC_0833.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16zVx3igmApyEigb6HMPLcdVzDFD8tVGi=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16zVx3igmApyEigb6HMPLcdVzDFD8tVGi=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16zVx3igmApyEigb6HMPLcdVzDFD8tVGi=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16zVx3igmApyEigb6HMPLcdVzDFD8tVGi",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT",
        "name": "DSC_0834.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41",
        "name": "DSC_0835.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41",
        "aspectRatio": "3/2"
      },
      {
        "id": "1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf",
        "name": "DSC_0836.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9",
        "name": "DSC_0838.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9",
        "aspectRatio": "3/2"
      },
      {
        "id": "17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1",
        "name": "DSC_0839.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y",
        "name": "DSC_0840.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-UPHMhNdxi41hOudngIoVbJvjPqe3527",
        "name": "DSC_0841.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-UPHMhNdxi41hOudngIoVbJvjPqe3527=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-UPHMhNdxi41hOudngIoVbJvjPqe3527=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-UPHMhNdxi41hOudngIoVbJvjPqe3527=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-UPHMhNdxi41hOudngIoVbJvjPqe3527",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV",
        "name": "DSC_0845.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo",
        "name": "DSC_0846.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ",
        "name": "DSC_0847.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V",
        "name": "DSC_0848.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY",
        "name": "DSC_0849.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe",
        "name": "DSC_0850.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe",
        "aspectRatio": "3/2"
      },
      {
        "id": "17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI",
        "name": "DSC_0851.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI",
        "aspectRatio": "3/2"
      },
      {
        "id": "106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM",
        "name": "DSC_0852.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn",
        "name": "DSC_0853.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h",
        "name": "DSC_0854.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ",
        "name": "DSC_0855.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV",
        "name": "DSC_0856.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT",
        "name": "DSC_0858.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1R5EzM-UN92OHi4juoBp89wwemt9o1UqI",
        "name": "DSC_0859.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1R5EzM-UN92OHi4juoBp89wwemt9o1UqI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1R5EzM-UN92OHi4juoBp89wwemt9o1UqI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1R5EzM-UN92OHi4juoBp89wwemt9o1UqI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1R5EzM-UN92OHi4juoBp89wwemt9o1UqI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04",
        "name": "DSC_0860.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g",
        "name": "DSC_0861.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN",
        "name": "DSC_0862.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G",
        "name": "DSC_0863.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly",
        "name": "DSC_0865.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2",
        "name": "DSC_0866.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG",
        "name": "DSC_0867.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB",
        "name": "DSC_0868.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM",
        "name": "DSC_2135.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF",
        "name": "DSC_2136.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa",
        "name": "DSC_2137.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt",
        "name": "DSC_2138.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I",
        "name": "DSC_2139.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I",
        "aspectRatio": "3/2"
      },
      {
        "id": "15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU",
        "name": "DSC_2140.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU",
        "name": "DSC_2141.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU",
        "aspectRatio": "3/2"
      },
      {
        "id": "123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R",
        "name": "DSC_2142.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R",
        "aspectRatio": "3/2"
      },
      {
        "id": "1q9LJJs4970T4at2cEvIVoZXozB4GfRzq",
        "name": "DSC_2143.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1q9LJJs4970T4at2cEvIVoZXozB4GfRzq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1q9LJJs4970T4at2cEvIVoZXozB4GfRzq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1q9LJJs4970T4at2cEvIVoZXozB4GfRzq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1q9LJJs4970T4at2cEvIVoZXozB4GfRzq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ",
        "name": "DSC_2144.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C",
        "name": "DSC_2146.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc",
        "name": "DSC_2147.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nvY2-GafzISm5hPSZFWBFjE2afsqETs0",
        "name": "DSC_2148.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nvY2-GafzISm5hPSZFWBFjE2afsqETs0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nvY2-GafzISm5hPSZFWBFjE2afsqETs0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nvY2-GafzISm5hPSZFWBFjE2afsqETs0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nvY2-GafzISm5hPSZFWBFjE2afsqETs0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ",
        "name": "DSC_2149.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1afWuw008kxBTnmOLQXPFPMilen0M59Sm",
        "name": "DSC_2150.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1afWuw008kxBTnmOLQXPFPMilen0M59Sm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1afWuw008kxBTnmOLQXPFPMilen0M59Sm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1afWuw008kxBTnmOLQXPFPMilen0M59Sm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1afWuw008kxBTnmOLQXPFPMilen0M59Sm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl",
        "name": "DSC_2151.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1",
        "name": "DSC_2152.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dfvKEED60aNRq9Cm2avwXPpb66h417IJ",
        "name": "DSC_2153.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dfvKEED60aNRq9Cm2avwXPpb66h417IJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dfvKEED60aNRq9Cm2avwXPpb66h417IJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dfvKEED60aNRq9Cm2avwXPpb66h417IJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dfvKEED60aNRq9Cm2avwXPpb66h417IJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl",
        "name": "DSC_2154.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl",
        "aspectRatio": "3/2"
      },
      {
        "id": "12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik",
        "name": "DSC_2155.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj",
        "name": "DSC_2156.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj",
        "aspectRatio": "3/2"
      },
      {
        "id": "12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L",
        "name": "DSC_2157.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL",
        "name": "DSC_2158.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R",
        "name": "DSC_2159.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl",
        "name": "DSC_2161.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe",
        "name": "DSC_2162.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B",
        "name": "DSC_2163.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr",
        "name": "DSC_2164.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7",
        "name": "DSC_2165.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94",
        "name": "DSC_2166.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9",
        "name": "DSC_2167.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9",
        "aspectRatio": "3/2"
      },
      {
        "id": "19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH",
        "name": "DSC_2168.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv",
        "name": "DSC_2169.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq",
        "name": "DSC_2170.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp",
        "name": "DSC_2171.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH",
        "name": "DSC_2172.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb",
        "name": "DSC_2173.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd",
        "name": "DSC_2174.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy",
        "name": "DSC_2175.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_",
        "name": "DSC_2176.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0",
        "name": "DSC_2177.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0",
        "aspectRatio": "3/2"
      },
      {
        "id": "11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt",
        "name": "DSC_2178.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z",
        "name": "DSC_2179.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_",
        "name": "DSC_2180.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Psousz4wfGHkvpKNemmy1HNrxnMt27wz",
        "name": "DSC_2181.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Psousz4wfGHkvpKNemmy1HNrxnMt27wz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Psousz4wfGHkvpKNemmy1HNrxnMt27wz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Psousz4wfGHkvpKNemmy1HNrxnMt27wz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Psousz4wfGHkvpKNemmy1HNrxnMt27wz",
        "aspectRatio": "3/2"
      },
      {
        "id": "18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D",
        "name": "DSC_2182.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GVrZpP8XpyPueZzaejZGBrKuMcblNun4",
        "name": "DSC_2183.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GVrZpP8XpyPueZzaejZGBrKuMcblNun4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GVrZpP8XpyPueZzaejZGBrKuMcblNun4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GVrZpP8XpyPueZzaejZGBrKuMcblNun4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GVrZpP8XpyPueZzaejZGBrKuMcblNun4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS",
        "name": "DSC_2184.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3",
        "name": "DSC_2185.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ",
        "name": "DSC_2186.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE",
        "name": "AVDM1937.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj",
        "name": "AVDM1938.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG",
        "name": "AVDM1939.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG",
        "aspectRatio": "3/2"
      },
      {
        "id": "18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL",
        "name": "AVDM1940.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU",
        "name": "AVDM1941.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-U0QiWTISxBffnect6LcWZZzfZhbAMeR",
        "name": "AVDM1942.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-U0QiWTISxBffnect6LcWZZzfZhbAMeR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-U0QiWTISxBffnect6LcWZZzfZhbAMeR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-U0QiWTISxBffnect6LcWZZzfZhbAMeR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-U0QiWTISxBffnect6LcWZZzfZhbAMeR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-",
        "name": "AVDM1943.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2",
        "name": "AVDM1944.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn",
        "name": "AVDM1945.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC",
        "name": "AVDM1946.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC",
        "aspectRatio": "3/2"
      },
      {
        "id": "11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW",
        "name": "AVDM1947.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vQITc2iot-1V_bNd9G80GTIWdskC3vFs",
        "name": "AVDM1948.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vQITc2iot-1V_bNd9G80GTIWdskC3vFs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vQITc2iot-1V_bNd9G80GTIWdskC3vFs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vQITc2iot-1V_bNd9G80GTIWdskC3vFs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vQITc2iot-1V_bNd9G80GTIWdskC3vFs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2",
        "name": "AVDM1949.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2",
        "aspectRatio": "3/2"
      },
      {
        "id": "15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_",
        "name": "AVDM1950.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QJa-h70eZmsuufs74MRCOWj9cRWAft4x",
        "name": "AVDM1951.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QJa-h70eZmsuufs74MRCOWj9cRWAft4x=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QJa-h70eZmsuufs74MRCOWj9cRWAft4x=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QJa-h70eZmsuufs74MRCOWj9cRWAft4x=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QJa-h70eZmsuufs74MRCOWj9cRWAft4x",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6",
        "name": "AVDM1952.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ",
        "name": "AVDM1953.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT",
        "name": "AVDM1954.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL",
        "name": "AVDM1955.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6",
        "name": "AVDM1956.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d",
        "name": "AVDM1957.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE",
        "name": "AVDM1958.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75",
        "name": "AVDM1959.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo",
        "name": "AVDM1960.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB",
        "name": "AVDM1961.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz",
        "name": "AVDM1962.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q",
        "name": "AVDM1963.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc",
        "name": "AVDM1964.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hEZlftWny1dpf4F0v0mriiroUtKXYXDM",
        "name": "AVDM1965.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hEZlftWny1dpf4F0v0mriiroUtKXYXDM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hEZlftWny1dpf4F0v0mriiroUtKXYXDM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hEZlftWny1dpf4F0v0mriiroUtKXYXDM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hEZlftWny1dpf4F0v0mriiroUtKXYXDM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z7s6aplUNHpajDR531zgzqK8tor875qw",
        "name": "AVDM1966.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z7s6aplUNHpajDR531zgzqK8tor875qw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z7s6aplUNHpajDR531zgzqK8tor875qw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z7s6aplUNHpajDR531zgzqK8tor875qw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z7s6aplUNHpajDR531zgzqK8tor875qw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6",
        "name": "AVDM1967.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S",
        "name": "AVDM1968.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S",
        "aspectRatio": "3/2"
      },
      {
        "id": "11A_zACa-rnDZtUre4moPamcu1q7CngZ-",
        "name": "AVDM1969.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11A_zACa-rnDZtUre4moPamcu1q7CngZ-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11A_zACa-rnDZtUre4moPamcu1q7CngZ-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11A_zACa-rnDZtUre4moPamcu1q7CngZ-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11A_zACa-rnDZtUre4moPamcu1q7CngZ-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I",
        "name": "AVDM1970.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I",
        "aspectRatio": "3/2"
      },
      {
        "id": "18ibqdggwutMIE6tjE15Icf_MA9vMY7mo",
        "name": "AVDM1971.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18ibqdggwutMIE6tjE15Icf_MA9vMY7mo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18ibqdggwutMIE6tjE15Icf_MA9vMY7mo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18ibqdggwutMIE6tjE15Icf_MA9vMY7mo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18ibqdggwutMIE6tjE15Icf_MA9vMY7mo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rtRzl86erRQL8o0PKIXwYuhAvvDnN686",
        "name": "AVDM1972.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rtRzl86erRQL8o0PKIXwYuhAvvDnN686=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rtRzl86erRQL8o0PKIXwYuhAvvDnN686=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rtRzl86erRQL8o0PKIXwYuhAvvDnN686=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rtRzl86erRQL8o0PKIXwYuhAvvDnN686",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26",
        "name": "AVDM1973.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O",
        "name": "AVDM1974.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f",
        "name": "AVDM1975.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zcke07DlSWRWd-umWquYUVqRgCw7At5a",
        "name": "AVDM1976.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zcke07DlSWRWd-umWquYUVqRgCw7At5a=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zcke07DlSWRWd-umWquYUVqRgCw7At5a=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zcke07DlSWRWd-umWquYUVqRgCw7At5a=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zcke07DlSWRWd-umWquYUVqRgCw7At5a",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx",
        "name": "AVDM1977.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A",
        "name": "AVDM1978.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV",
        "name": "AVDM1979.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm",
        "name": "AVDM1980.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA",
        "name": "AVDM1981.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq",
        "name": "AVDM1982.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq",
        "aspectRatio": "3/2"
      },
      {
        "id": "16euyiGv9cjimrlFituY7bR6Ixza-IqZH",
        "name": "AVDM1983.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16euyiGv9cjimrlFituY7bR6Ixza-IqZH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16euyiGv9cjimrlFituY7bR6Ixza-IqZH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16euyiGv9cjimrlFituY7bR6Ixza-IqZH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16euyiGv9cjimrlFituY7bR6Ixza-IqZH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS",
        "name": "AVDM1984.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO",
        "name": "AVDM1985.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ",
        "name": "AVDM1986.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3",
        "name": "DSC_3316.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg",
        "name": "DSC_3318.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uj17TTmAimw7Rm03OWaze3asaPFQOhOG",
        "name": "DSC_3319.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uj17TTmAimw7Rm03OWaze3asaPFQOhOG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uj17TTmAimw7Rm03OWaze3asaPFQOhOG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uj17TTmAimw7Rm03OWaze3asaPFQOhOG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uj17TTmAimw7Rm03OWaze3asaPFQOhOG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj",
        "name": "DSC_3320.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2",
        "name": "DSC_3321.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_",
        "name": "DSC_3322.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329",
        "name": "DSC_3323.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB",
        "name": "DSC_3325.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq",
        "name": "DSC_3326.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq",
        "aspectRatio": "3/2"
      },
      {
        "id": "14XddcK88uZyw69PoKltlxRCS8n7ozq1h",
        "name": "DSC_3327.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14XddcK88uZyw69PoKltlxRCS8n7ozq1h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14XddcK88uZyw69PoKltlxRCS8n7ozq1h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14XddcK88uZyw69PoKltlxRCS8n7ozq1h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14XddcK88uZyw69PoKltlxRCS8n7ozq1h",
        "aspectRatio": "3/2"
      },
      {
        "id": "12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM",
        "name": "DSC_3328.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF",
        "name": "DSC_3329.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc",
        "name": "DSC_3330.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ubqaaH5eof_43afSrxejGNA_mNa39ZbS",
        "name": "DSC_3331.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ubqaaH5eof_43afSrxejGNA_mNa39ZbS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ubqaaH5eof_43afSrxejGNA_mNa39ZbS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ubqaaH5eof_43afSrxejGNA_mNa39ZbS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ubqaaH5eof_43afSrxejGNA_mNa39ZbS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw",
        "name": "DSC_3332.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg",
        "name": "DSC_3333.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK",
        "name": "DSC_3334.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu",
        "name": "DSC_3335.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg",
        "name": "DSC_3336.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ot82khI210h--BaZH7Np-IaatpxLSQ5S",
        "name": "DSC_3337.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ot82khI210h--BaZH7Np-IaatpxLSQ5S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ot82khI210h--BaZH7Np-IaatpxLSQ5S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ot82khI210h--BaZH7Np-IaatpxLSQ5S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ot82khI210h--BaZH7Np-IaatpxLSQ5S",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh",
        "name": "DSC_3338.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN",
        "name": "DSC_3339.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN",
        "aspectRatio": "3/2"
      },
      {
        "id": "14hhERKSLrK2SQovQGhy1gQX1FaILy1KI",
        "name": "DSC_3340.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14hhERKSLrK2SQovQGhy1gQX1FaILy1KI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14hhERKSLrK2SQovQGhy1gQX1FaILy1KI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14hhERKSLrK2SQovQGhy1gQX1FaILy1KI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14hhERKSLrK2SQovQGhy1gQX1FaILy1KI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR",
        "name": "DSC_3341.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj",
        "name": "DSC_3342.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d",
        "name": "DSC_3344.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-",
        "name": "DSC_3345.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX",
        "name": "DSC_3346.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4",
        "name": "DSC_3347.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N",
        "name": "DSC_3348.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N",
        "aspectRatio": "3/2"
      },
      {
        "id": "127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj",
        "name": "DSC_3349.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_",
        "name": "DSC_3350.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL",
        "name": "DSC_3351.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U",
        "name": "DSC_3352.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00",
        "name": "DSC_3353.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00",
        "aspectRatio": "3/2"
      },
      {
        "id": "16YcM69oTf6O_3foyOiW_KeSs50NCdBXR",
        "name": "DSC_3354.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16YcM69oTf6O_3foyOiW_KeSs50NCdBXR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16YcM69oTf6O_3foyOiW_KeSs50NCdBXR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16YcM69oTf6O_3foyOiW_KeSs50NCdBXR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16YcM69oTf6O_3foyOiW_KeSs50NCdBXR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ",
        "name": "DSC_3355.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST",
        "name": "DSC_3356.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u",
        "name": "DSC_3357.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_",
        "name": "DSC_3358.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq",
        "name": "DSC_3359.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm",
        "name": "DSC_3360.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX",
        "name": "DSC_3361.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427",
        "name": "DSC_3362.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH",
        "name": "DSC_3363.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9",
        "name": "DSC_3364.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT",
        "name": "DSC_3365.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8",
        "name": "DSC_3366.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8",
        "aspectRatio": "3/2"
      },
      {
        "id": "14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB",
        "name": "DSC_3367.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF",
        "name": "DSC_3368.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-",
        "name": "AVDM2329.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb",
        "name": "AVDM2330.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI",
        "name": "AVDM2331.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF",
        "name": "AVDM2332.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt",
        "name": "AVDM2333.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO",
        "name": "AVDM2334.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY",
        "name": "AVDM2335.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur",
        "name": "AVDM2336.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS",
        "name": "AVDM2337.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ",
        "name": "AVDM2338.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7",
        "name": "AVDM2339.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU",
        "name": "AVDM2340.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK",
        "name": "AVDM2341.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW",
        "name": "AVDM2342.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0",
        "name": "AVDM2343.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM",
        "name": "AVDM2344.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD",
        "name": "AVDM2345.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN",
        "name": "AVDM2346.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW",
        "name": "AVDM2347.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW",
        "aspectRatio": "3/2"
      },
      {
        "id": "158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS",
        "name": "AVDM2348.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi",
        "name": "AVDM2349.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP",
        "name": "AVDM2350.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC",
        "name": "AVDM2351.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df",
        "name": "AVDM2352.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh",
        "name": "AVDM2353.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F",
        "name": "AVDM2354.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F",
        "aspectRatio": "3/2"
      },
      {
        "id": "10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ",
        "name": "AVDM2355.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "181BZWzY4WXkV442jL2K5Skxmrmz567UK",
        "name": "AVDM2356.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/181BZWzY4WXkV442jL2K5Skxmrmz567UK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/181BZWzY4WXkV442jL2K5Skxmrmz567UK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/181BZWzY4WXkV442jL2K5Skxmrmz567UK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=181BZWzY4WXkV442jL2K5Skxmrmz567UK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Nu1tg8922CDfx6kBnetssX8WPQBOyd35",
        "name": "AVDM2357.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Nu1tg8922CDfx6kBnetssX8WPQBOyd35=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Nu1tg8922CDfx6kBnetssX8WPQBOyd35=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Nu1tg8922CDfx6kBnetssX8WPQBOyd35=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Nu1tg8922CDfx6kBnetssX8WPQBOyd35",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB",
        "name": "AVDM2358.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry",
        "name": "AVDM2359.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ",
        "name": "AVDM2360.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1",
        "name": "AVDM2361.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP",
        "name": "AVDM2362.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP",
        "aspectRatio": "3/2"
      },
      {
        "id": "18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg",
        "name": "AVDM2363.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR",
        "name": "AVDM2364.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz",
        "name": "AVDM2365.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1",
        "name": "AVDM2366.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ",
        "name": "AVDM2367.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl",
        "name": "AVDM2368.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm",
        "name": "AVDM2369.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm",
        "aspectRatio": "3/2"
      },
      {
        "id": "12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD",
        "name": "AVDM2370.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1",
        "name": "AVDM2371.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM",
        "name": "AVDM2372.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM",
        "aspectRatio": "3/2"
      },
      {
        "id": "15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy",
        "name": "AVDM2373.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4",
        "name": "AVDM2374.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H",
        "name": "AVDM2375.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X",
        "name": "AVDM2376.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P",
        "name": "AVDM2377.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P",
        "aspectRatio": "3/2"
      },
      {
        "id": "1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l",
        "name": "AVDM2378.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V",
        "name": "DSC_3572.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy",
        "name": "DSC_3573.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy",
        "aspectRatio": "3/2"
      },
      {
        "id": "10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab",
        "name": "DSC_3574.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X",
        "name": "DSC_3579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK",
        "name": "DSC_3580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v",
        "name": "DSC_3581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A",
        "name": "DSC_3582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oCkOU5MTJJRZY1p7sur50k63yA0rznRw",
        "name": "DSC_3583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oCkOU5MTJJRZY1p7sur50k63yA0rznRw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oCkOU5MTJJRZY1p7sur50k63yA0rznRw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oCkOU5MTJJRZY1p7sur50k63yA0rznRw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oCkOU5MTJJRZY1p7sur50k63yA0rznRw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR",
        "name": "DSC_3584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_Zchy8ioszVIyexnsTJd61Q13ilheOGD",
        "name": "DSC_3585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_Zchy8ioszVIyexnsTJd61Q13ilheOGD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_Zchy8ioszVIyexnsTJd61Q13ilheOGD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_Zchy8ioszVIyexnsTJd61Q13ilheOGD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_Zchy8ioszVIyexnsTJd61Q13ilheOGD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IsktcZbVnV6t54NEVu611EwUsttkBpIM",
        "name": "DSC_3586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IsktcZbVnV6t54NEVu611EwUsttkBpIM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IsktcZbVnV6t54NEVu611EwUsttkBpIM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IsktcZbVnV6t54NEVu611EwUsttkBpIM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IsktcZbVnV6t54NEVu611EwUsttkBpIM",
        "aspectRatio": "3/2"
      },
      {
        "id": "10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7",
        "name": "DSC_3587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7",
        "aspectRatio": "3/2"
      },
      {
        "id": "14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB",
        "name": "DSC_3588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF",
        "name": "DSC_3589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF",
        "name": "DSC_3590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4",
        "name": "DSC_3591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV",
        "name": "DSC_3592.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ",
        "name": "DSC_3593.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ",
        "name": "DSC_3594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc",
        "name": "DSC_3595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf",
        "name": "DSC_3596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM",
        "name": "DSC_3599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7",
        "name": "DSC_3600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7",
        "aspectRatio": "3/2"
      },
      {
        "id": "17YtQcamLATiEGgLrHiXsYCNIouPokxlj",
        "name": "DSC_3601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17YtQcamLATiEGgLrHiXsYCNIouPokxlj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17YtQcamLATiEGgLrHiXsYCNIouPokxlj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17YtQcamLATiEGgLrHiXsYCNIouPokxlj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17YtQcamLATiEGgLrHiXsYCNIouPokxlj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh",
        "name": "DSC_3602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ",
        "name": "DSC_3603.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ",
        "name": "DSC_3604.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM",
        "name": "DSC_3606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU",
        "name": "DSC_3607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb",
        "name": "DSC_3608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw",
        "name": "DSC_3609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S",
        "name": "DSC_3610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S",
        "aspectRatio": "3/2"
      },
      {
        "id": "10lQhleWGl6-BdEP465WVT_SrSpUs3OQn",
        "name": "DSC_3611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10lQhleWGl6-BdEP465WVT_SrSpUs3OQn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10lQhleWGl6-BdEP465WVT_SrSpUs3OQn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10lQhleWGl6-BdEP465WVT_SrSpUs3OQn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10lQhleWGl6-BdEP465WVT_SrSpUs3OQn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc",
        "name": "DSC_3612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn",
        "name": "DSC_3613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv",
        "name": "DSC_3614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Gpazi6X1FvOxl4knnQd481klvXDxAsN1",
        "name": "DSC_3615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Gpazi6X1FvOxl4knnQd481klvXDxAsN1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Gpazi6X1FvOxl4knnQd481klvXDxAsN1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Gpazi6X1FvOxl4knnQd481klvXDxAsN1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Gpazi6X1FvOxl4knnQd481klvXDxAsN1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IKS5rDz1q96nGoNO5Den-A26U96_lU_1",
        "name": "DSC_3616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IKS5rDz1q96nGoNO5Den-A26U96_lU_1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IKS5rDz1q96nGoNO5Den-A26U96_lU_1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IKS5rDz1q96nGoNO5Den-A26U96_lU_1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IKS5rDz1q96nGoNO5Den-A26U96_lU_1",
        "aspectRatio": "3/2"
      },
      {
        "id": "156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo",
        "name": "DSC_3617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n2t0adVKdmcJG-si-60CbKccU01-ALat",
        "name": "DSC_3618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n2t0adVKdmcJG-si-60CbKccU01-ALat=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n2t0adVKdmcJG-si-60CbKccU01-ALat=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n2t0adVKdmcJG-si-60CbKccU01-ALat=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n2t0adVKdmcJG-si-60CbKccU01-ALat",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3",
        "name": "DSC_3619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv",
        "name": "DSC_3624.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5",
        "name": "DSC_3625.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-",
        "name": "DSC_3626.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS",
        "name": "DSC_3627.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h",
        "name": "DSC_3628.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3",
        "name": "DSC_3629.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh",
        "name": "DSC_3630.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG",
        "name": "DSC_3631.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK",
        "name": "DSC_3632.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gvCFj752p8Alf3pV6lKT1dH8PNihU22m",
        "name": "AVDM0001.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gvCFj752p8Alf3pV6lKT1dH8PNihU22m",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5",
        "name": "AVDM0002.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI",
        "name": "AVDM0003.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b",
        "name": "AVDM0004.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU",
        "name": "AVDM0006.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd",
        "name": "AVDM0007.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX",
        "name": "AVDM0008.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc",
        "name": "AVDM0009.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx",
        "name": "AVDM0010.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6",
        "name": "AVDM0011.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU",
        "name": "AVDM0012.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp",
        "name": "AVDM0013.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp",
        "aspectRatio": "3/2"
      },
      {
        "id": "13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK",
        "name": "AVDM0014.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC",
        "name": "AVDM0015.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L",
        "name": "AVDM0016.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c",
        "name": "AVDM0017.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu",
        "name": "AVDM0018.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g",
        "name": "AVDM0019.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g",
        "aspectRatio": "3/2"
      },
      {
        "id": "14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy",
        "name": "AVDM0020.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO",
        "name": "AVDM0021.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz",
        "name": "AVDM0022.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF",
        "name": "AVDM0023.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF",
        "aspectRatio": "3/2"
      },
      {
        "id": "19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN",
        "name": "AVDM0024.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq",
        "name": "AVDM0025.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl",
        "name": "AVDM0026.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK",
        "name": "AVDM0027.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO",
        "name": "AVDM0028.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm",
        "name": "AVDM0029.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo",
        "name": "AVDM0030.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo",
        "aspectRatio": "3/2"
      },
      {
        "id": "16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i",
        "name": "AVDM0031.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9",
        "name": "AVDM0032.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy",
        "name": "AVDM0033.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-",
        "name": "AVDM0034.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-",
        "aspectRatio": "3/2"
      },
      {
        "id": "14cTCIQa73eEEdLmBxORaUTEg1saU0KxP",
        "name": "AVDM0035.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14cTCIQa73eEEdLmBxORaUTEg1saU0KxP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14cTCIQa73eEEdLmBxORaUTEg1saU0KxP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14cTCIQa73eEEdLmBxORaUTEg1saU0KxP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14cTCIQa73eEEdLmBxORaUTEg1saU0KxP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl",
        "name": "AVDM0036.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V",
        "name": "AVDM0037.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2",
        "name": "AVDM0038.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2",
        "aspectRatio": "3/2"
      },
      {
        "id": "12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq",
        "name": "AVDM0039.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij",
        "name": "AVDM0040.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y",
        "name": "AVDM0041.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY",
        "name": "AVDM0042.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer",
        "name": "AVDM0043.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf",
        "name": "AVDM0044.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c",
        "name": "AVDM0045.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x",
        "name": "AVDM0046.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW",
        "name": "AVDM0047.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO",
        "name": "AVDM0048.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A",
        "name": "AVDM0049.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A",
        "aspectRatio": "3/2"
      },
      {
        "id": "170WEmJpWuILQlKORGCELQ7znKmpGsXXR",
        "name": "AVDM0050.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/170WEmJpWuILQlKORGCELQ7znKmpGsXXR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/170WEmJpWuILQlKORGCELQ7znKmpGsXXR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/170WEmJpWuILQlKORGCELQ7znKmpGsXXR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=170WEmJpWuILQlKORGCELQ7znKmpGsXXR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw",
        "name": "AVDM0051.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g",
        "name": "AVDM0578.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g",
        "aspectRatio": "3/2"
      },
      {
        "id": "13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n",
        "name": "AVDM0578.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_",
        "name": "AVDM0579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE",
        "name": "AVDM0579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1J2eI47jZVFSwVBraktGe0DROmB6tyltg",
        "name": "AVDM0580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1J2eI47jZVFSwVBraktGe0DROmB6tyltg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1J2eI47jZVFSwVBraktGe0DROmB6tyltg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1J2eI47jZVFSwVBraktGe0DROmB6tyltg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1J2eI47jZVFSwVBraktGe0DROmB6tyltg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz",
        "name": "AVDM0580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur",
        "name": "AVDM0581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur",
        "aspectRatio": "3/2"
      },
      {
        "id": "17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-",
        "name": "AVDM0581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR",
        "name": "AVDM0582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR",
        "aspectRatio": "3/2"
      },
      {
        "id": "15JYvJNghnUm3M6AahS_qlOpuO7deLLKT",
        "name": "AVDM0582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15JYvJNghnUm3M6AahS_qlOpuO7deLLKT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15JYvJNghnUm3M6AahS_qlOpuO7deLLKT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15JYvJNghnUm3M6AahS_qlOpuO7deLLKT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15JYvJNghnUm3M6AahS_qlOpuO7deLLKT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX",
        "name": "AVDM0583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX",
        "aspectRatio": "3/2"
      },
      {
        "id": "12UicZ32kllImbV6haWzIjwKhVZVbNa4A",
        "name": "AVDM0583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12UicZ32kllImbV6haWzIjwKhVZVbNa4A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12UicZ32kllImbV6haWzIjwKhVZVbNa4A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12UicZ32kllImbV6haWzIjwKhVZVbNa4A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12UicZ32kllImbV6haWzIjwKhVZVbNa4A",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG",
        "name": "AVDM0584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP",
        "name": "AVDM0584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP",
        "aspectRatio": "3/2"
      },
      {
        "id": "16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln",
        "name": "AVDM0585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln",
        "aspectRatio": "3/2"
      },
      {
        "id": "1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW",
        "name": "AVDM0585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK",
        "name": "AVDM0586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK",
        "aspectRatio": "3/2"
      },
      {
        "id": "17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy",
        "name": "AVDM0586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz",
        "name": "AVDM0587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz",
        "aspectRatio": "3/2"
      },
      {
        "id": "106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s",
        "name": "AVDM0587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID",
        "name": "AVDM0588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO",
        "name": "AVDM0588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB",
        "name": "AVDM0589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX",
        "name": "AVDM0589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX",
        "aspectRatio": "3/2"
      },
      {
        "id": "17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM",
        "name": "AVDM0590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq",
        "name": "AVDM0590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB",
        "name": "AVDM0591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO",
        "name": "AVDM0591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa",
        "name": "AVDM0592.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G",
        "name": "AVDM0592.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2",
        "name": "AVDM0593.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA",
        "name": "AVDM0593.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s",
        "name": "AVDM0594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm",
        "name": "AVDM0594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD",
        "name": "AVDM0595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj",
        "name": "AVDM0595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv",
        "name": "AVDM0596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr",
        "name": "AVDM0596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wb16dABabUsqbIE--FoXP4zPcjJandl3",
        "name": "AVDM0597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wb16dABabUsqbIE--FoXP4zPcjJandl3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wb16dABabUsqbIE--FoXP4zPcjJandl3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wb16dABabUsqbIE--FoXP4zPcjJandl3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wb16dABabUsqbIE--FoXP4zPcjJandl3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu",
        "name": "AVDM0597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB",
        "name": "AVDM0598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-",
        "name": "AVDM0598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta",
        "name": "AVDM0599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9",
        "name": "AVDM0599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B",
        "name": "AVDM0600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B",
        "aspectRatio": "3/2"
      },
      {
        "id": "19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6",
        "name": "AVDM0600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FexukqOW07-Ng0EURywcJS6GuXb9eARt",
        "name": "AVDM0601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FexukqOW07-Ng0EURywcJS6GuXb9eARt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FexukqOW07-Ng0EURywcJS6GuXb9eARt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FexukqOW07-Ng0EURywcJS6GuXb9eARt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FexukqOW07-Ng0EURywcJS6GuXb9eARt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er",
        "name": "AVDM0601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx",
        "name": "AVDM0602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx",
        "aspectRatio": "3/2"
      },
      {
        "id": "14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp",
        "name": "AVDM0602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu",
        "name": "AVDM1019.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD",
        "name": "AVDM1020.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1E6KS__lIyINZHozae52sZ4DUKqJB9CV-",
        "name": "AVDM1021.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1E6KS__lIyINZHozae52sZ4DUKqJB9CV-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1E6KS__lIyINZHozae52sZ4DUKqJB9CV-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1E6KS__lIyINZHozae52sZ4DUKqJB9CV-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1E6KS__lIyINZHozae52sZ4DUKqJB9CV-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE",
        "name": "AVDM1023.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw",
        "name": "AVDM1024.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sjwlYKPKjFejZByldD0OBna3paYrMd4R",
        "name": "AVDM1025.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sjwlYKPKjFejZByldD0OBna3paYrMd4R=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sjwlYKPKjFejZByldD0OBna3paYrMd4R=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sjwlYKPKjFejZByldD0OBna3paYrMd4R=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sjwlYKPKjFejZByldD0OBna3paYrMd4R",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB",
        "name": "AVDM1026.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt",
        "name": "AVDM1027.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv",
        "name": "AVDM1028.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sHulYzva8C-KhewfMWYUTLS9JFJKcIty",
        "name": "AVDM1029.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sHulYzva8C-KhewfMWYUTLS9JFJKcIty=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sHulYzva8C-KhewfMWYUTLS9JFJKcIty=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sHulYzva8C-KhewfMWYUTLS9JFJKcIty=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sHulYzva8C-KhewfMWYUTLS9JFJKcIty",
        "aspectRatio": "3/2"
      },
      {
        "id": "1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ",
        "name": "AVDM1030.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DAeNegcCFhSGag61mExLeInzWBfHpAbu",
        "name": "AVDM1031.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DAeNegcCFhSGag61mExLeInzWBfHpAbu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DAeNegcCFhSGag61mExLeInzWBfHpAbu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DAeNegcCFhSGag61mExLeInzWBfHpAbu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DAeNegcCFhSGag61mExLeInzWBfHpAbu",
        "aspectRatio": "3/2"
      },
      {
        "id": "17HBN7dzTccREnpCzL36sJo51S6-4eI9g",
        "name": "AVDM1032.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17HBN7dzTccREnpCzL36sJo51S6-4eI9g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17HBN7dzTccREnpCzL36sJo51S6-4eI9g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17HBN7dzTccREnpCzL36sJo51S6-4eI9g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17HBN7dzTccREnpCzL36sJo51S6-4eI9g",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6",
        "name": "AVDM1033.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6",
        "aspectRatio": "3/2"
      },
      {
        "id": "117GkA6zmjE_XT1XHON2gPfrSS4eAINXB",
        "name": "AVDM1034.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/117GkA6zmjE_XT1XHON2gPfrSS4eAINXB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/117GkA6zmjE_XT1XHON2gPfrSS4eAINXB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/117GkA6zmjE_XT1XHON2gPfrSS4eAINXB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=117GkA6zmjE_XT1XHON2gPfrSS4eAINXB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW",
        "name": "AVDM1035.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-",
        "name": "AVDM1036.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC",
        "name": "AVDM1037.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt",
        "name": "AVDM1038.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz",
        "name": "AVDM1039.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS",
        "name": "AVDM1040.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ",
        "name": "AVDM1041.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3",
        "name": "AVDM1042.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs",
        "name": "AVDM1043.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7",
        "name": "AVDM1044.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo",
        "name": "AVDM1045.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1",
        "name": "AVDM1046.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K",
        "name": "AVDM1047.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4",
        "name": "AVDM1048.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h",
        "name": "AVDM1049.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND",
        "name": "AVDM1051.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND",
        "aspectRatio": "3/2"
      },
      {
        "id": "17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm",
        "name": "AVDM1052.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx",
        "name": "AVDM1053.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV",
        "name": "AVDM1054.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV",
        "aspectRatio": "3/2"
      },
      {
        "id": "14atpQimnLYRbOBhmbH15yoXi-zPDVLdM",
        "name": "AVDM1055.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14atpQimnLYRbOBhmbH15yoXi-zPDVLdM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14atpQimnLYRbOBhmbH15yoXi-zPDVLdM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14atpQimnLYRbOBhmbH15yoXi-zPDVLdM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14atpQimnLYRbOBhmbH15yoXi-zPDVLdM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC",
        "name": "AVDM1056.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw",
        "name": "AVDM1057.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX",
        "name": "AVDM1058.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_",
        "name": "AVDM1059.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC",
        "name": "AVDM1060.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv",
        "name": "AVDM1061.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9",
        "name": "AVDM1062.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb",
        "name": "AVDM1063.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb",
        "aspectRatio": "3/2"
      },
      {
        "id": "16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo",
        "name": "AVDM1064.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1426De4GlNW-Tm7sesZBx074t4XIpAm0V",
        "name": "AVDM1065.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1426De4GlNW-Tm7sesZBx074t4XIpAm0V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1426De4GlNW-Tm7sesZBx074t4XIpAm0V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1426De4GlNW-Tm7sesZBx074t4XIpAm0V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1426De4GlNW-Tm7sesZBx074t4XIpAm0V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23",
        "name": "AVDM1066.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23",
        "aspectRatio": "3/2"
      },
      {
        "id": "1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W",
        "name": "AVDM1067.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W",
        "aspectRatio": "3/2"
      },
      {
        "id": "10KimsczE5GQqWA1rBsebdKcwAYUhRhR4",
        "name": "AVDM1068.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10KimsczE5GQqWA1rBsebdKcwAYUhRhR4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10KimsczE5GQqWA1rBsebdKcwAYUhRhR4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10KimsczE5GQqWA1rBsebdKcwAYUhRhR4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10KimsczE5GQqWA1rBsebdKcwAYUhRhR4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp",
        "name": "AVDM1069.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z_n9iBuovT71T-VsistT3uVUdWH5nAVV",
        "name": "AVDM1070.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z_n9iBuovT71T-VsistT3uVUdWH5nAVV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z_n9iBuovT71T-VsistT3uVUdWH5nAVV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z_n9iBuovT71T-VsistT3uVUdWH5nAVV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z_n9iBuovT71T-VsistT3uVUdWH5nAVV",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "subfolders": [
      {
        "name": "Day 01 - 03.11.2026 (Tue) | Slot 001 (06:00 Hrs) to Slot 018 (23:00 Hrs)",
        "id": "1s1_BIyXCnZ0FuUD_wYPd_9u7-msrkHmU",
        "count": 50,
        "slug": "day-01-03112026-tue-slot-001-0600-hrs-to-slot-018-2300-hrs"
      },
      {
        "name": "Day 02 - 04.11.2026 (Wed) | Slot 019 (00:00 Hrs) to Slot 042 (23:00 Hrs)",
        "id": "1zFFwIMaTbPLURU0JqGjmFRE4-yIkTyFn",
        "count": 50,
        "slug": "day-02-04112026-wed-slot-019-0000-hrs-to-slot-042-2300-hrs"
      },
      {
        "name": "Day 03 - 05.11.2026 (Thu) | Slot 043 (00:00 Hrs) to Slot 066 (23:00 Hrs)",
        "id": "1evOLsxQekIiqJezZxyEMghw5gVm-zXDb",
        "count": 50,
        "slug": "day-03-05112026-thu-slot-043-0000-hrs-to-slot-066-2300-hrs"
      },
      {
        "name": "Day 04 - 06.11.2026 (Fri) | Slot 067 (00:00 Hrs) to Slot 090 (23:00 Hrs)",
        "id": "1kE6BfFl2Un_8BwPE6B_3VPixQC9X3nq6",
        "count": 50,
        "slug": "day-04-06112026-fri-slot-067-0000-hrs-to-slot-090-2300-hrs"
      },
      {
        "name": "Day 05 - 07.11.2026 (Sat) | Slot 091 (00:00 Hrs) to Slot 114 (23:00 Hrs)",
        "id": "14VgPRm7PWUdXT-MP84NH4ETQYjYdlObq",
        "count": 50,
        "slug": "day-05-07112026-sat-slot-091-0000-hrs-to-slot-114-2300-hrs"
      },
      {
        "name": "Day 06 - 08.11.2026 (Sun) | Slot 115 (00:00 Hrs) to Slot 138 (23:00 Hrs)",
        "id": "1ywg-NlvFeSIh_APZDwXt_hrlInfrnrel",
        "count": 50,
        "slug": "day-06-08112026-sun-slot-115-0000-hrs-to-slot-138-2300-hrs"
      },
      {
        "name": "Day 07 - 09.11.2026 (Mon) | Slot 139 (00:00 Hrs) to Slot 162 (23:00 Hrs)",
        "id": "1McqHDu3ZYK6BeLPgm8vEMcupzT_zVjVT",
        "count": 50,
        "slug": "day-07-09112026-mon-slot-139-0000-hrs-to-slot-162-2300-hrs"
      },
      {
        "name": "Day 08 - 10.11.2026 (Tue) | Slot 163 (00:00 Hrs) to Slot 186 (23:00 Hrs)",
        "id": "1I7E0v4iP4eLTVBbt-mrokVFlT_OD-kBV",
        "count": 50,
        "slug": "day-08-10112026-tue-slot-163-0000-hrs-to-slot-186-2300-hrs"
      },
      {
        "name": "Day 09 - 11.11.2026 (Wed) | Slot 187 (00:00 Hrs) to Slot 210 (23:00 Hrs)",
        "id": "1rHIQemeLpluBDytGIOnpfY7uZULDZ8_m",
        "count": 50,
        "slug": "day-09-11112026-wed-slot-187-0000-hrs-to-slot-210-2300-hrs"
      },
      {
        "name": "Day 10 - 12.11.2026 (Thu) | Slot 211 (00:00 Hrs) to Slot 234 (23:00 Hrs)",
        "id": "1onVC0Hz3j5Yk0TiZx4PSfcUgPVQJiVhS",
        "count": 50,
        "slug": "day-10-12112026-thu-slot-211-0000-hrs-to-slot-234-2300-hrs"
      },
      {
        "name": "Day 11 - 13.11.2026 (Fri) | Slot 235 (00:00 Hrs) to Slot 258 (23:00 Hrs)",
        "id": "1pLipdxcdo69SmNalZzZcqjHhtLrW8ufO",
        "count": 50,
        "slug": "day-11-13112026-fri-slot-235-0000-hrs-to-slot-258-2300-hrs"
      },
      {
        "name": "Day 12 - 14.11.2026 (Sat) | Slot 259 (00:00 Hrs) to Slot 282 (23:00 Hrs)",
        "id": "1gzsvmvHyaJA-ptQJPbDQ3nYeWfpB58Gk",
        "count": 50,
        "slug": "day-12-14112026-sat-slot-259-0000-hrs-to-slot-282-2300-hrs"
      },
      {
        "name": "Day 13 - 15.11.2026 (Sun) | Slot 283 (00:00 Hrs) to Slot 300 (17:00 Hrs)",
        "id": "1ghXI4naB2FxnSM0B2QO6ZXjheeNP03qZ",
        "count": 50,
        "slug": "day-13-15112026-sun-slot-283-0000-hrs-to-slot-300-1700-hrs"
      }
    ]
  },
  {
    "id": "1vNqKQlEpRwDYRBGsF1fuOxVp3x9yy-To",
    "slug": "valedictory-function-15-11-2026",
    "name": "Valedictory Function (15-11-2026)",
    "shortTitle": "Valedictory Function",
    "category": "Convention Events",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo album for Valedictory Function (15-11-2026).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1vNqKQlEpRwDYRBGsF1fuOxVp3x9yy-To",
    "photoCount": 50,
    "coverPhoto": {
      "id": "16vahcO7RSYzobvERss_Ybmu9iRANC52X",
      "name": "AVDM1594.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/16vahcO7RSYzobvERss_Ybmu9iRANC52X=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/16vahcO7RSYzobvERss_Ybmu9iRANC52X=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/16vahcO7RSYzobvERss_Ybmu9iRANC52X=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=16vahcO7RSYzobvERss_Ybmu9iRANC52X",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "16vahcO7RSYzobvERss_Ybmu9iRANC52X",
        "name": "AVDM1594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16vahcO7RSYzobvERss_Ybmu9iRANC52X=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16vahcO7RSYzobvERss_Ybmu9iRANC52X=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16vahcO7RSYzobvERss_Ybmu9iRANC52X=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16vahcO7RSYzobvERss_Ybmu9iRANC52X",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WHcWmPzzd_IhCz3DZAyWVrB-1eMmq24c",
        "name": "AVDM1595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WHcWmPzzd_IhCz3DZAyWVrB-1eMmq24c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WHcWmPzzd_IhCz3DZAyWVrB-1eMmq24c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WHcWmPzzd_IhCz3DZAyWVrB-1eMmq24c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WHcWmPzzd_IhCz3DZAyWVrB-1eMmq24c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kMc-rC87ZssawtBg5iYHs5_cNwpSWjDd",
        "name": "AVDM1596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kMc-rC87ZssawtBg5iYHs5_cNwpSWjDd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kMc-rC87ZssawtBg5iYHs5_cNwpSWjDd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kMc-rC87ZssawtBg5iYHs5_cNwpSWjDd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kMc-rC87ZssawtBg5iYHs5_cNwpSWjDd",
        "aspectRatio": "3/2"
      },
      {
        "id": "10nXrsHkSoPwREweJaUClM3uf5YDmSdr4",
        "name": "AVDM1597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10nXrsHkSoPwREweJaUClM3uf5YDmSdr4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10nXrsHkSoPwREweJaUClM3uf5YDmSdr4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10nXrsHkSoPwREweJaUClM3uf5YDmSdr4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10nXrsHkSoPwREweJaUClM3uf5YDmSdr4",
        "aspectRatio": "3/2"
      },
      {
        "id": "15Ikh2OljUUv8CPqLbA9tsI62ZYECCQ6_",
        "name": "AVDM1598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15Ikh2OljUUv8CPqLbA9tsI62ZYECCQ6_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15Ikh2OljUUv8CPqLbA9tsI62ZYECCQ6_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15Ikh2OljUUv8CPqLbA9tsI62ZYECCQ6_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15Ikh2OljUUv8CPqLbA9tsI62ZYECCQ6_",
        "aspectRatio": "3/2"
      },
      {
        "id": "10f4Dbl724jJsB9xStRnFFz-cQjud3H7L",
        "name": "AVDM1599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10f4Dbl724jJsB9xStRnFFz-cQjud3H7L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10f4Dbl724jJsB9xStRnFFz-cQjud3H7L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10f4Dbl724jJsB9xStRnFFz-cQjud3H7L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10f4Dbl724jJsB9xStRnFFz-cQjud3H7L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZVsD_174zMWkiBhU_VtfarCp0a4YzJOL",
        "name": "AVDM1600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZVsD_174zMWkiBhU_VtfarCp0a4YzJOL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZVsD_174zMWkiBhU_VtfarCp0a4YzJOL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZVsD_174zMWkiBhU_VtfarCp0a4YzJOL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZVsD_174zMWkiBhU_VtfarCp0a4YzJOL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gpphnD_w5zkcvUk9sj11zT59hzLElWWm",
        "name": "AVDM1602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gpphnD_w5zkcvUk9sj11zT59hzLElWWm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gpphnD_w5zkcvUk9sj11zT59hzLElWWm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gpphnD_w5zkcvUk9sj11zT59hzLElWWm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gpphnD_w5zkcvUk9sj11zT59hzLElWWm",
        "aspectRatio": "3/2"
      },
      {
        "id": "10hP5xIYJsfXqjYvJwgN-uG6UJKcsdVeA",
        "name": "AVDM1603.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10hP5xIYJsfXqjYvJwgN-uG6UJKcsdVeA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10hP5xIYJsfXqjYvJwgN-uG6UJKcsdVeA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10hP5xIYJsfXqjYvJwgN-uG6UJKcsdVeA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10hP5xIYJsfXqjYvJwgN-uG6UJKcsdVeA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iDUmh36PsbQoZDaW6NB0GVLC0x0Rnp7P",
        "name": "AVDM1604.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iDUmh36PsbQoZDaW6NB0GVLC0x0Rnp7P=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iDUmh36PsbQoZDaW6NB0GVLC0x0Rnp7P=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iDUmh36PsbQoZDaW6NB0GVLC0x0Rnp7P=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iDUmh36PsbQoZDaW6NB0GVLC0x0Rnp7P",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VUVqdieXHFG_krrG5umm1ztGvSDQnPai",
        "name": "AVDM1605.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VUVqdieXHFG_krrG5umm1ztGvSDQnPai=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VUVqdieXHFG_krrG5umm1ztGvSDQnPai=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VUVqdieXHFG_krrG5umm1ztGvSDQnPai=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VUVqdieXHFG_krrG5umm1ztGvSDQnPai",
        "aspectRatio": "3/2"
      },
      {
        "id": "176Z4h4Ary8SN2UvEARoN-Mi48yt6uL6U",
        "name": "AVDM1606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/176Z4h4Ary8SN2UvEARoN-Mi48yt6uL6U=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/176Z4h4Ary8SN2UvEARoN-Mi48yt6uL6U=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/176Z4h4Ary8SN2UvEARoN-Mi48yt6uL6U=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=176Z4h4Ary8SN2UvEARoN-Mi48yt6uL6U",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IpQM-vCLxdKBAB27kZz5nFZ6MJsFH6Fi",
        "name": "AVDM1607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IpQM-vCLxdKBAB27kZz5nFZ6MJsFH6Fi=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IpQM-vCLxdKBAB27kZz5nFZ6MJsFH6Fi=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IpQM-vCLxdKBAB27kZz5nFZ6MJsFH6Fi=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IpQM-vCLxdKBAB27kZz5nFZ6MJsFH6Fi",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EARGZLkb2zV5Lu30WuXp5YBzBY8Prgh9",
        "name": "AVDM1608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EARGZLkb2zV5Lu30WuXp5YBzBY8Prgh9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EARGZLkb2zV5Lu30WuXp5YBzBY8Prgh9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EARGZLkb2zV5Lu30WuXp5YBzBY8Prgh9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EARGZLkb2zV5Lu30WuXp5YBzBY8Prgh9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nE3vZcq31djLo3mXKs-POy2NaSNcxoxE",
        "name": "AVDM1609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nE3vZcq31djLo3mXKs-POy2NaSNcxoxE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nE3vZcq31djLo3mXKs-POy2NaSNcxoxE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nE3vZcq31djLo3mXKs-POy2NaSNcxoxE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nE3vZcq31djLo3mXKs-POy2NaSNcxoxE",
        "aspectRatio": "3/2"
      },
      {
        "id": "17pp8jbypLuTm_BIX_EYLEgI92flTgzFK",
        "name": "AVDM1610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17pp8jbypLuTm_BIX_EYLEgI92flTgzFK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17pp8jbypLuTm_BIX_EYLEgI92flTgzFK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17pp8jbypLuTm_BIX_EYLEgI92flTgzFK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17pp8jbypLuTm_BIX_EYLEgI92flTgzFK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LLaagqnw-GCIP4c8xk1XcqTifKGECmIu",
        "name": "AVDM1611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LLaagqnw-GCIP4c8xk1XcqTifKGECmIu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LLaagqnw-GCIP4c8xk1XcqTifKGECmIu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LLaagqnw-GCIP4c8xk1XcqTifKGECmIu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LLaagqnw-GCIP4c8xk1XcqTifKGECmIu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ewat3Qne0GmQO5RkFwiXgEHSF1zh3ne8",
        "name": "AVDM1612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ewat3Qne0GmQO5RkFwiXgEHSF1zh3ne8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ewat3Qne0GmQO5RkFwiXgEHSF1zh3ne8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ewat3Qne0GmQO5RkFwiXgEHSF1zh3ne8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ewat3Qne0GmQO5RkFwiXgEHSF1zh3ne8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QQu5K77tcV1rvlhHI1aUephHwVYkvz3r",
        "name": "AVDM1613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QQu5K77tcV1rvlhHI1aUephHwVYkvz3r=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QQu5K77tcV1rvlhHI1aUephHwVYkvz3r=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QQu5K77tcV1rvlhHI1aUephHwVYkvz3r=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QQu5K77tcV1rvlhHI1aUephHwVYkvz3r",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lT2FVTnnWN05RmCJjQLKG8n-tZjLymIf",
        "name": "AVDM1614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lT2FVTnnWN05RmCJjQLKG8n-tZjLymIf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lT2FVTnnWN05RmCJjQLKG8n-tZjLymIf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lT2FVTnnWN05RmCJjQLKG8n-tZjLymIf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lT2FVTnnWN05RmCJjQLKG8n-tZjLymIf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PzJ275J9GaRs1Gbcw-QXloIOd824IdhA",
        "name": "AVDM1615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PzJ275J9GaRs1Gbcw-QXloIOd824IdhA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PzJ275J9GaRs1Gbcw-QXloIOd824IdhA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PzJ275J9GaRs1Gbcw-QXloIOd824IdhA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PzJ275J9GaRs1Gbcw-QXloIOd824IdhA",
        "aspectRatio": "3/2"
      },
      {
        "id": "14I0U65-HwQYvmJ7ZQEj1cNHw2LKBz6ut",
        "name": "AVDM1616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14I0U65-HwQYvmJ7ZQEj1cNHw2LKBz6ut=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14I0U65-HwQYvmJ7ZQEj1cNHw2LKBz6ut=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14I0U65-HwQYvmJ7ZQEj1cNHw2LKBz6ut=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14I0U65-HwQYvmJ7ZQEj1cNHw2LKBz6ut",
        "aspectRatio": "3/2"
      },
      {
        "id": "1baH3132fQoa7NsZNe1BLc2M8rouLPjpS",
        "name": "AVDM1617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1baH3132fQoa7NsZNe1BLc2M8rouLPjpS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1baH3132fQoa7NsZNe1BLc2M8rouLPjpS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1baH3132fQoa7NsZNe1BLc2M8rouLPjpS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1baH3132fQoa7NsZNe1BLc2M8rouLPjpS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u8SSZ23VtmiDuK_xuf3XsMy7F2bEUb1D",
        "name": "AVDM1618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u8SSZ23VtmiDuK_xuf3XsMy7F2bEUb1D=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u8SSZ23VtmiDuK_xuf3XsMy7F2bEUb1D=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u8SSZ23VtmiDuK_xuf3XsMy7F2bEUb1D=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u8SSZ23VtmiDuK_xuf3XsMy7F2bEUb1D",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iKIoU8hXaCwg_hNjC8HH96yEqq7j7N-b",
        "name": "AVDM1619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iKIoU8hXaCwg_hNjC8HH96yEqq7j7N-b=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iKIoU8hXaCwg_hNjC8HH96yEqq7j7N-b=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iKIoU8hXaCwg_hNjC8HH96yEqq7j7N-b=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iKIoU8hXaCwg_hNjC8HH96yEqq7j7N-b",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nmd5Hu9SuAYSQD2ZfwqHsK7-CGeNXVh_",
        "name": "AVDM1620.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nmd5Hu9SuAYSQD2ZfwqHsK7-CGeNXVh_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nmd5Hu9SuAYSQD2ZfwqHsK7-CGeNXVh_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nmd5Hu9SuAYSQD2ZfwqHsK7-CGeNXVh_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nmd5Hu9SuAYSQD2ZfwqHsK7-CGeNXVh_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ABoHFPraS1bMaycEnUQWbK5pqvF3OhwN",
        "name": "AVDM1621.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ABoHFPraS1bMaycEnUQWbK5pqvF3OhwN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ABoHFPraS1bMaycEnUQWbK5pqvF3OhwN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ABoHFPraS1bMaycEnUQWbK5pqvF3OhwN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ABoHFPraS1bMaycEnUQWbK5pqvF3OhwN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OkfrP5QROFdJVGWbW0IXSf2celMt0ZrQ",
        "name": "AVDM1622.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OkfrP5QROFdJVGWbW0IXSf2celMt0ZrQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OkfrP5QROFdJVGWbW0IXSf2celMt0ZrQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OkfrP5QROFdJVGWbW0IXSf2celMt0ZrQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OkfrP5QROFdJVGWbW0IXSf2celMt0ZrQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z57f24uJ2dEdQqtH_5aaH6F-tcFZ8mxS",
        "name": "AVDM1623.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z57f24uJ2dEdQqtH_5aaH6F-tcFZ8mxS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z57f24uJ2dEdQqtH_5aaH6F-tcFZ8mxS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z57f24uJ2dEdQqtH_5aaH6F-tcFZ8mxS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z57f24uJ2dEdQqtH_5aaH6F-tcFZ8mxS",
        "aspectRatio": "3/2"
      },
      {
        "id": "13ICnwlkQrYCHwaZhtp62KsQIxzi8BYUP",
        "name": "AVDM1624.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13ICnwlkQrYCHwaZhtp62KsQIxzi8BYUP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13ICnwlkQrYCHwaZhtp62KsQIxzi8BYUP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13ICnwlkQrYCHwaZhtp62KsQIxzi8BYUP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13ICnwlkQrYCHwaZhtp62KsQIxzi8BYUP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YaFJkiRsGPEdm41T9G0n4IDrNCrKiXbR",
        "name": "AVDM1625.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YaFJkiRsGPEdm41T9G0n4IDrNCrKiXbR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YaFJkiRsGPEdm41T9G0n4IDrNCrKiXbR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YaFJkiRsGPEdm41T9G0n4IDrNCrKiXbR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YaFJkiRsGPEdm41T9G0n4IDrNCrKiXbR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vD28roizosBgXqQQc4YbJmkfwwbrnAS0",
        "name": "AVDM1626.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vD28roizosBgXqQQc4YbJmkfwwbrnAS0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vD28roizosBgXqQQc4YbJmkfwwbrnAS0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vD28roizosBgXqQQc4YbJmkfwwbrnAS0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vD28roizosBgXqQQc4YbJmkfwwbrnAS0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VH6Ts5lZzzJMYSN17BsgIFsXqILBI1Gs",
        "name": "AVDM1627.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VH6Ts5lZzzJMYSN17BsgIFsXqILBI1Gs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VH6Ts5lZzzJMYSN17BsgIFsXqILBI1Gs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VH6Ts5lZzzJMYSN17BsgIFsXqILBI1Gs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VH6Ts5lZzzJMYSN17BsgIFsXqILBI1Gs",
        "aspectRatio": "3/2"
      },
      {
        "id": "18RFauIAH7WimXVHH5v1ubCzsOyNewr9S",
        "name": "AVDM1628.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18RFauIAH7WimXVHH5v1ubCzsOyNewr9S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18RFauIAH7WimXVHH5v1ubCzsOyNewr9S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18RFauIAH7WimXVHH5v1ubCzsOyNewr9S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18RFauIAH7WimXVHH5v1ubCzsOyNewr9S",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HE1g3xvzyZNuAGLXSAPe4XVFZ9821ymq",
        "name": "AVDM1629.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HE1g3xvzyZNuAGLXSAPe4XVFZ9821ymq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HE1g3xvzyZNuAGLXSAPe4XVFZ9821ymq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HE1g3xvzyZNuAGLXSAPe4XVFZ9821ymq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HE1g3xvzyZNuAGLXSAPe4XVFZ9821ymq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vl_8QqO6GCeN66jL-7ZnCHXTQDz2e7vo",
        "name": "AVDM1630.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vl_8QqO6GCeN66jL-7ZnCHXTQDz2e7vo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vl_8QqO6GCeN66jL-7ZnCHXTQDz2e7vo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vl_8QqO6GCeN66jL-7ZnCHXTQDz2e7vo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vl_8QqO6GCeN66jL-7ZnCHXTQDz2e7vo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zDtvIHwQq-6hcFvEDUOPedqS9Od2FBfk",
        "name": "AVDM1631.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zDtvIHwQq-6hcFvEDUOPedqS9Od2FBfk=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zDtvIHwQq-6hcFvEDUOPedqS9Od2FBfk=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zDtvIHwQq-6hcFvEDUOPedqS9Od2FBfk=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zDtvIHwQq-6hcFvEDUOPedqS9Od2FBfk",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-WgRztKT6zDVwgndJw3vQh5mSC3dRFDf",
        "name": "AVDM1632.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-WgRztKT6zDVwgndJw3vQh5mSC3dRFDf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-WgRztKT6zDVwgndJw3vQh5mSC3dRFDf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-WgRztKT6zDVwgndJw3vQh5mSC3dRFDf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-WgRztKT6zDVwgndJw3vQh5mSC3dRFDf",
        "aspectRatio": "3/2"
      },
      {
        "id": "19cRtYhuf6fDnFA7Grui24QyTWskGXb2y",
        "name": "AVDM1633.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19cRtYhuf6fDnFA7Grui24QyTWskGXb2y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19cRtYhuf6fDnFA7Grui24QyTWskGXb2y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19cRtYhuf6fDnFA7Grui24QyTWskGXb2y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19cRtYhuf6fDnFA7Grui24QyTWskGXb2y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RwFVRpP5WRy26D0utZDHGC8PFyeNjp2l",
        "name": "AVDM1634.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RwFVRpP5WRy26D0utZDHGC8PFyeNjp2l=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RwFVRpP5WRy26D0utZDHGC8PFyeNjp2l=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RwFVRpP5WRy26D0utZDHGC8PFyeNjp2l=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RwFVRpP5WRy26D0utZDHGC8PFyeNjp2l",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wcMtlhhsqGoGHmdYrSCiZ3uCZuF82exJ",
        "name": "AVDM1635.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wcMtlhhsqGoGHmdYrSCiZ3uCZuF82exJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wcMtlhhsqGoGHmdYrSCiZ3uCZuF82exJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wcMtlhhsqGoGHmdYrSCiZ3uCZuF82exJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wcMtlhhsqGoGHmdYrSCiZ3uCZuF82exJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kCX8bSnadx78xS30EeE50lc5ZRnD43XD",
        "name": "AVDM1636.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kCX8bSnadx78xS30EeE50lc5ZRnD43XD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kCX8bSnadx78xS30EeE50lc5ZRnD43XD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kCX8bSnadx78xS30EeE50lc5ZRnD43XD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kCX8bSnadx78xS30EeE50lc5ZRnD43XD",
        "aspectRatio": "3/2"
      },
      {
        "id": "19kuDLPVCBLleu9DTYFNOemRTZ27E77Ok",
        "name": "AVDM1637.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19kuDLPVCBLleu9DTYFNOemRTZ27E77Ok=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19kuDLPVCBLleu9DTYFNOemRTZ27E77Ok=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19kuDLPVCBLleu9DTYFNOemRTZ27E77Ok=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19kuDLPVCBLleu9DTYFNOemRTZ27E77Ok",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-MihpUof1Q8gRevhl5fsVatXy9m_VSuF",
        "name": "AVDM1638.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-MihpUof1Q8gRevhl5fsVatXy9m_VSuF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-MihpUof1Q8gRevhl5fsVatXy9m_VSuF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-MihpUof1Q8gRevhl5fsVatXy9m_VSuF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-MihpUof1Q8gRevhl5fsVatXy9m_VSuF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nXYGOfJnQ84bGOV7QKqRHOKK-BSL3c7c",
        "name": "AVDM1639.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nXYGOfJnQ84bGOV7QKqRHOKK-BSL3c7c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nXYGOfJnQ84bGOV7QKqRHOKK-BSL3c7c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nXYGOfJnQ84bGOV7QKqRHOKK-BSL3c7c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nXYGOfJnQ84bGOV7QKqRHOKK-BSL3c7c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YE5BqmTgF5M0AwfFqtpJobxbkmDnTSpm",
        "name": "AVDM1640.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YE5BqmTgF5M0AwfFqtpJobxbkmDnTSpm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YE5BqmTgF5M0AwfFqtpJobxbkmDnTSpm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YE5BqmTgF5M0AwfFqtpJobxbkmDnTSpm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YE5BqmTgF5M0AwfFqtpJobxbkmDnTSpm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SdAbK7F1HP8av8y8g4AJ9VASA_x7Ct6w",
        "name": "AVDM1641.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SdAbK7F1HP8av8y8g4AJ9VASA_x7Ct6w=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SdAbK7F1HP8av8y8g4AJ9VASA_x7Ct6w=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SdAbK7F1HP8av8y8g4AJ9VASA_x7Ct6w=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SdAbK7F1HP8av8y8g4AJ9VASA_x7Ct6w",
        "aspectRatio": "3/2"
      },
      {
        "id": "18_u5yQOTpdeh3gtImMR-wgkoDHCoEhLG",
        "name": "AVDM1642.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18_u5yQOTpdeh3gtImMR-wgkoDHCoEhLG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18_u5yQOTpdeh3gtImMR-wgkoDHCoEhLG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18_u5yQOTpdeh3gtImMR-wgkoDHCoEhLG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18_u5yQOTpdeh3gtImMR-wgkoDHCoEhLG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1h50BP53lYtiVZp2yWz5Zcv2YjpuFc4Vo",
        "name": "AVDM1643.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1h50BP53lYtiVZp2yWz5Zcv2YjpuFc4Vo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1h50BP53lYtiVZp2yWz5Zcv2YjpuFc4Vo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1h50BP53lYtiVZp2yWz5Zcv2YjpuFc4Vo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1h50BP53lYtiVZp2yWz5Zcv2YjpuFc4Vo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gJgY8lMcm4RcaONASO1NQNiIWCXF88Td",
        "name": "AVDM1644.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gJgY8lMcm4RcaONASO1NQNiIWCXF88Td=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gJgY8lMcm4RcaONASO1NQNiIWCXF88Td=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gJgY8lMcm4RcaONASO1NQNiIWCXF88Td=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gJgY8lMcm4RcaONASO1NQNiIWCXF88Td",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true
  },
  {
    "id": "1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "slug": "symposium-felicitations",
    "name": "Symposium & Felicitations",
    "shortTitle": "Symposium & Felicitations",
    "category": "Main Convention",
    "date": "03 - 15 Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo documentation for Symposium & Felicitations with 6 sub-sessions.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "photoCount": 100,
    "coverPhoto": {
      "id": "1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
      "name": "DSC_1515.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
        "name": "DSC_1515.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
        "aspectRatio": "3/2"
      },
      {
        "id": "12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9",
        "name": "DSC_1517.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34",
        "name": "DSC_1518.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34",
        "aspectRatio": "3/2"
      },
      {
        "id": "1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT",
        "name": "DSC_1519.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2",
        "name": "DSC_1520.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2",
        "name": "DSC_1521.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2",
        "aspectRatio": "3/2"
      },
      {
        "id": "121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or",
        "name": "DSC_1522.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc",
        "name": "DSC_1523.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn",
        "name": "DSC_1524.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d",
        "name": "DSC_1525.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz",
        "name": "DSC_1526.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu",
        "name": "DSC_1527.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu",
        "aspectRatio": "3/2"
      },
      {
        "id": "13r-X3GeIuIpuveDbQ9etOLBG0XbviktY",
        "name": "DSC_1528.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13r-X3GeIuIpuveDbQ9etOLBG0XbviktY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13r-X3GeIuIpuveDbQ9etOLBG0XbviktY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13r-X3GeIuIpuveDbQ9etOLBG0XbviktY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13r-X3GeIuIpuveDbQ9etOLBG0XbviktY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3",
        "name": "DSC_1529.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw",
        "name": "DSC_1530.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI",
        "name": "DSC_1532.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S",
        "name": "DSC_1533.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw",
        "name": "DSC_1534.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1clevR7TyptOyWUIzk80gWHWoSso4KEvn",
        "name": "DSC_1535.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1clevR7TyptOyWUIzk80gWHWoSso4KEvn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1clevR7TyptOyWUIzk80gWHWoSso4KEvn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1clevR7TyptOyWUIzk80gWHWoSso4KEvn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1clevR7TyptOyWUIzk80gWHWoSso4KEvn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v",
        "name": "DSC_1536.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v",
        "aspectRatio": "3/2"
      },
      {
        "id": "10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77",
        "name": "DSC_1537.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77",
        "aspectRatio": "3/2"
      },
      {
        "id": "16THYux0m1T25rR4esJo4QIUMvd5D3k3y",
        "name": "DSC_1538.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16THYux0m1T25rR4esJo4QIUMvd5D3k3y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16THYux0m1T25rR4esJo4QIUMvd5D3k3y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16THYux0m1T25rR4esJo4QIUMvd5D3k3y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16THYux0m1T25rR4esJo4QIUMvd5D3k3y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u",
        "name": "DSC_1539.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3",
        "name": "DSC_1540.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR",
        "name": "DSC_1542.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-",
        "name": "DSC_1543.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-",
        "aspectRatio": "3/2"
      },
      {
        "id": "19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB",
        "name": "DSC_1544.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LXcRw9ca-XolfQahj_34wKEF6iITt9d5",
        "name": "DSC_1545.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LXcRw9ca-XolfQahj_34wKEF6iITt9d5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LXcRw9ca-XolfQahj_34wKEF6iITt9d5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LXcRw9ca-XolfQahj_34wKEF6iITt9d5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LXcRw9ca-XolfQahj_34wKEF6iITt9d5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cZ7j68lmPSxG7078_jXfpklc2mQqweg-",
        "name": "DSC_1546.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cZ7j68lmPSxG7078_jXfpklc2mQqweg-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cZ7j68lmPSxG7078_jXfpklc2mQqweg-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cZ7j68lmPSxG7078_jXfpklc2mQqweg-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cZ7j68lmPSxG7078_jXfpklc2mQqweg-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR",
        "name": "DSC_1547.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn",
        "name": "DSC_1548.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn",
        "aspectRatio": "3/2"
      },
      {
        "id": "15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj",
        "name": "DSC_1549.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y0ObliD-qxltharytzOMXhq_g5g6COms",
        "name": "DSC_1550.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y0ObliD-qxltharytzOMXhq_g5g6COms=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y0ObliD-qxltharytzOMXhq_g5g6COms=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y0ObliD-qxltharytzOMXhq_g5g6COms=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y0ObliD-qxltharytzOMXhq_g5g6COms",
        "aspectRatio": "3/2"
      },
      {
        "id": "1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7",
        "name": "DSC_1551.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7",
        "aspectRatio": "3/2"
      },
      {
        "id": "195NwVsnCfdv_pLFs-CkanibL_kf5bzp9",
        "name": "DSC_1552.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/195NwVsnCfdv_pLFs-CkanibL_kf5bzp9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/195NwVsnCfdv_pLFs-CkanibL_kf5bzp9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/195NwVsnCfdv_pLFs-CkanibL_kf5bzp9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=195NwVsnCfdv_pLFs-CkanibL_kf5bzp9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vmLliTEATANixP56NJ_TLfBG_hpsdWo_",
        "name": "DSC_1553.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vmLliTEATANixP56NJ_TLfBG_hpsdWo_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vmLliTEATANixP56NJ_TLfBG_hpsdWo_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vmLliTEATANixP56NJ_TLfBG_hpsdWo_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vmLliTEATANixP56NJ_TLfBG_hpsdWo_",
        "aspectRatio": "3/2"
      },
      {
        "id": "17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT",
        "name": "DSC_1554.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo",
        "name": "DSC_1555.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo",
        "aspectRatio": "3/2"
      },
      {
        "id": "10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t",
        "name": "DSC_1556.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1",
        "name": "DSC_1557.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV",
        "name": "DSC_1558.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ",
        "name": "DSC_1559.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m",
        "name": "DSC_1560.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m",
        "aspectRatio": "3/2"
      },
      {
        "id": "13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F",
        "name": "DSC_1561.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I",
        "name": "DSC_1562.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I",
        "aspectRatio": "3/2"
      },
      {
        "id": "15UCBpR8xQfCfr71Yy_cprWeummrAZdI2",
        "name": "DSC_1563.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15UCBpR8xQfCfr71Yy_cprWeummrAZdI2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15UCBpR8xQfCfr71Yy_cprWeummrAZdI2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15UCBpR8xQfCfr71Yy_cprWeummrAZdI2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15UCBpR8xQfCfr71Yy_cprWeummrAZdI2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li",
        "name": "DSC_1564.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv",
        "name": "DSC_1565.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p",
        "name": "DSC_1566.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na",
        "name": "DSC_1567.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0",
        "name": "DSC_2406.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O",
        "name": "DSC_2407.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O",
        "aspectRatio": "3/2"
      },
      {
        "id": "1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ",
        "name": "DSC_2408.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O",
        "name": "DSC_2409.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe",
        "name": "DSC_2410.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe",
        "aspectRatio": "3/2"
      },
      {
        "id": "15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ",
        "name": "DSC_2411.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt",
        "name": "DSC_2412.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z",
        "name": "DSC_2413.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_",
        "name": "DSC_2414.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl",
        "name": "DSC_2415.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO",
        "name": "DSC_2416.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP",
        "name": "DSC_2417.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc",
        "name": "DSC_2418.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-",
        "name": "DSC_2419.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT",
        "name": "DSC_2420.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oo69w_hPigoaopyHizuv67xGWMCij8R5",
        "name": "DSC_2421.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oo69w_hPigoaopyHizuv67xGWMCij8R5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oo69w_hPigoaopyHizuv67xGWMCij8R5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oo69w_hPigoaopyHizuv67xGWMCij8R5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oo69w_hPigoaopyHizuv67xGWMCij8R5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UqReFK4_HWeA31G4G3sIP9E3SD76rJho",
        "name": "DSC_2422.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UqReFK4_HWeA31G4G3sIP9E3SD76rJho=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UqReFK4_HWeA31G4G3sIP9E3SD76rJho=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UqReFK4_HWeA31G4G3sIP9E3SD76rJho=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UqReFK4_HWeA31G4G3sIP9E3SD76rJho",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI",
        "name": "DSC_2423.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-",
        "name": "DSC_2424.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v",
        "name": "DSC_2425.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy",
        "name": "DSC_2426.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D",
        "name": "DSC_2427.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D",
        "aspectRatio": "3/2"
      },
      {
        "id": "1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG",
        "name": "DSC_2428.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH",
        "name": "DSC_2429.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa",
        "name": "DSC_2430.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH",
        "name": "DSC_2431.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH",
        "aspectRatio": "3/2"
      },
      {
        "id": "14d4fb1_klyAAgssARKMbbAeEo-8Gtsah",
        "name": "DSC_2433.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14d4fb1_klyAAgssARKMbbAeEo-8Gtsah=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14d4fb1_klyAAgssARKMbbAeEo-8Gtsah=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14d4fb1_klyAAgssARKMbbAeEo-8Gtsah=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14d4fb1_klyAAgssARKMbbAeEo-8Gtsah",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl",
        "name": "DSC_2434.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl",
        "aspectRatio": "3/2"
      },
      {
        "id": "18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU",
        "name": "DSC_2435.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX",
        "name": "DSC_2436.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-",
        "name": "DSC_2437.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-",
        "aspectRatio": "3/2"
      },
      {
        "id": "16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR",
        "name": "DSC_2438.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp",
        "name": "DSC_2439.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD",
        "name": "DSC_2440.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl",
        "name": "DSC_2441.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl",
        "aspectRatio": "3/2"
      },
      {
        "id": "16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g",
        "name": "DSC_2442.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2",
        "name": "DSC_2443.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F9VyaV751684PviGhfYlK-AjF0Mjtsv3",
        "name": "DSC_2444.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F9VyaV751684PviGhfYlK-AjF0Mjtsv3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F9VyaV751684PviGhfYlK-AjF0Mjtsv3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F9VyaV751684PviGhfYlK-AjF0Mjtsv3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F9VyaV751684PviGhfYlK-AjF0Mjtsv3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB",
        "name": "DSC_2445.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB",
        "aspectRatio": "3/2"
      },
      {
        "id": "16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH",
        "name": "DSC_2446.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ",
        "name": "DSC_2447.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XIG7p0BhUV05yOjajKl390DKEvMQdDYq",
        "name": "DSC_2448.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XIG7p0BhUV05yOjajKl390DKEvMQdDYq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XIG7p0BhUV05yOjajKl390DKEvMQdDYq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XIG7p0BhUV05yOjajKl390DKEvMQdDYq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XIG7p0BhUV05yOjajKl390DKEvMQdDYq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl",
        "name": "DSC_2449.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kQClwh0u4QNvcFbgPyadSkLKz4our4K6",
        "name": "DSC_2450.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kQClwh0u4QNvcFbgPyadSkLKz4our4K6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kQClwh0u4QNvcFbgPyadSkLKz4our4K6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kQClwh0u4QNvcFbgPyadSkLKz4our4K6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kQClwh0u4QNvcFbgPyadSkLKz4our4K6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH",
        "name": "DSC_2451.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW",
        "name": "DSC_2452.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz",
        "name": "DSC_2453.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF",
        "name": "DSC_2454.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm",
        "name": "DSC_2455.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C",
        "name": "DSC_2456.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "subfolders": [
      {
        "name": "Symposium 01 & 02 - Konkani Devotional Music & Felicitations (07-11-2026)",
        "id": "1PauVrxOPB_sbf9r69Fh4bSTM3EH9jSzV",
        "count": 50,
        "slug": "symposium-01-02-konkani-devotional-music-felicitations-07-11-2026"
      },
      {
        "name": "Symposium 03 & 04 - Konkani Folk Music & Felicitations (08-11-2026)",
        "id": "1Wmwpv6uAaiLs4QnmILLGWClm2ksoEVzO",
        "count": 50,
        "slug": "symposium-03-04-konkani-folk-music-felicitations-08-11-2026"
      },
      {
        "name": "Symposium 05 & 06 - Music For Wellness, International Music & Felicitations (08-11-2026)",
        "id": "1SvnsdO4grgre7xUV_5kwEyO6pXa4Ug8Q",
        "count": 0,
        "slug": "symposium-05-06-music-for-wellness-international-music-felicitations-08-11-2026"
      },
      {
        "name": "Symposium 07 & 08 - Baila Music, Composers and Songs & Felicitations (10-11-2026)",
        "id": "1EWpC0K0QzGaHPT0WD4LkuD_ZSB0D8N1q",
        "count": 0,
        "slug": "symposium-07-08-baila-music-composers-and-songs-felicitations-10-11-2026"
      },
      {
        "name": "Symposium 09 & 10 - Theatre & Cinema Music, Impact of Mandd Sobhann Music & Felicitations (14-11-2026)",
        "id": "1dmGC7sYxHlcgrwxXKrcn9_Dqw8rL7Xl2",
        "count": 0,
        "slug": "symposium-09-10-theatre-cinema-music-impact-of-mandd-sobhann-music-felicitations-14-11-2026"
      },
      {
        "name": "Symposium 11 & 12 - IPR, Artificial Intelligence and Music & Felicitations (14-11-2026)",
        "id": "11mXxNsFn21MJ8ZvE4PTUKRbjXLJTYghF",
        "count": 0,
        "slug": "symposium-11-12-ipr-artificial-intelligence-and-music-felicitations-14-11-2026"
      }
    ]
  },
  {
    "id": "1s1_BIyXCnZ0FuUD_wYPd_9u7-msrkHmU",
    "slug": "day-01-03112026-tue-slot-001-0600-hrs-to-slot-018-2300-hrs",
    "name": "Day 01 - 03.11.2026 (Tue) | Slot 001 (06:00 Hrs) to Slot 018 (23:00 Hrs)",
    "shortTitle": "Day 01 - 03.11.2026 (Tue)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 01 - 03.11.2026 (Tue) | Slot 001 (06:00 Hrs) to Slot 018 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1s1_BIyXCnZ0FuUD_wYPd_9u7-msrkHmU",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
      "name": "AVDM1831.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
        "name": "AVDM1831.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1f0OTEcZDZmMWVRy-piCANGfJWGaRdS1Y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vskZY3g44bicawPCIRgwzLH4pc0oAMjF",
        "name": "AVDM1832.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vskZY3g44bicawPCIRgwzLH4pc0oAMjF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vskZY3g44bicawPCIRgwzLH4pc0oAMjF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vskZY3g44bicawPCIRgwzLH4pc0oAMjF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vskZY3g44bicawPCIRgwzLH4pc0oAMjF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HtWiU42TMCJP1fX5di_xubPPKPj20ro1",
        "name": "AVDM1833.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HtWiU42TMCJP1fX5di_xubPPKPj20ro1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HtWiU42TMCJP1fX5di_xubPPKPj20ro1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HtWiU42TMCJP1fX5di_xubPPKPj20ro1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HtWiU42TMCJP1fX5di_xubPPKPj20ro1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1C52GMMtHock41FWWYAWNxkYWOMdBsFhF",
        "name": "AVDM1834.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1C52GMMtHock41FWWYAWNxkYWOMdBsFhF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1C52GMMtHock41FWWYAWNxkYWOMdBsFhF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1C52GMMtHock41FWWYAWNxkYWOMdBsFhF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1C52GMMtHock41FWWYAWNxkYWOMdBsFhF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF",
        "name": "AVDM1835.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZfQx24r4IjVlV92pPCNSw2aRZJHMS7hF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP",
        "name": "AVDM1836.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K8vktCmVB5aHjlcaChNJlRqeDNS45XuP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn",
        "name": "AVDM1837.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1esmn6hXjqVxFA1_VbFu-qICc7QOIomWn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8",
        "name": "AVDM1838.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WTDXclSy19O6pM75nSFqLlZ9FiMyVvo8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o",
        "name": "AVDM1839.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SEQHj6UqqR77qK_bAA7kkJU6qRc_1D-o",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf",
        "name": "AVDM1840.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vvfGBn2VrbGPq2-_V6TzwycuQOfYLPwf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U",
        "name": "AVDM1841.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-0fcjmOgqY2tmnL2dC1ZwfkwlBlBiD0U",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu",
        "name": "AVDM1842.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z3aKgAQH_Mhqzyvg2iZv-Cv5IJw6-5xu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF",
        "name": "AVDM1843.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wTsk6NZ9TgB9TRKp6ff_VYCmYqVZpEbF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4",
        "name": "AVDM1844.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kEvKnQv4pcC5qL6SPTMdmpUlL2g5-Lu4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb",
        "name": "AVDM1845.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TySjrlAvyFxB7RyWe9emCPGLhLJo3xgb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9",
        "name": "AVDM1846.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GP8LcUSt7DoHtKsTfghhy4-hhcS8HAl9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_",
        "name": "AVDM1847.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1L1VuI9n_MGszZm0OGtW9kw2tTsBGkUq_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC",
        "name": "AVDM1848.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1X0WFrnaBGhhXOAQryn9BtE8a-uR_R6NC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT",
        "name": "AVDM1849.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YpgyZAKqi9iij-qcKvHROaGJSqomkrQT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v",
        "name": "AVDM1850.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VZxzfGSgppkPM2wcJvu742Q6jvCZxB4v",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV",
        "name": "AVDM1851.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Rpr9gO5_SYuRUt3fLUVqgwplz67G43tV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ",
        "name": "AVDM1852.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FWmXvj2W0U8c7qEGaBoIawI6BZ6_yXGZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp",
        "name": "AVDM1853.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vsq502OMeFx7WO2TniaYQGLFOh-5NRWp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9",
        "name": "AVDM1854.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cyWkMa8KeshLVS7ZM9CAhZK0YajbgaP9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC",
        "name": "AVDM1855.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LHGG7NSO6enKG1d6nEsc0_2UyZ_PxZqC",
        "aspectRatio": "3/2"
      },
      {
        "id": "13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y",
        "name": "AVDM1856.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13DMxq9MRLlB4TatK0qJ2_YHH4-pnif_y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro",
        "name": "AVDM1857.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1izBK2NBUQsS3ayo9jEtlRRy1jO5ScAro",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J",
        "name": "AVDM1858.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XpyRxpL46CUVITSJ8bwx0W5-MM1jhW-J",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z",
        "name": "AVDM1859.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QxXw6gnYouV2B29aZmodJcsBLsDVSJ-Z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51",
        "name": "AVDM1860.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SwEEiXmJ7MSqbIHFwQfIXvehsb5TJV51",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis",
        "name": "AVDM1861.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dgGMpmA7FjIGi2hsKHZfh2dsgdP1qFis",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK",
        "name": "AVDM1862.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LuMHpamVzj7HOQab9XpscxbqNhrKy7qK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl",
        "name": "AVDM1863.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MNuFiLliDuNKdTpAs6lltFcGJQtOzijl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv",
        "name": "AVDM1864.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nuUzJUIarzSNdVZNRpxbL0Z0ly6OiIGv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-",
        "name": "AVDM1865.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1V-87Q0f52M-PZXnlcQjiCHShK7Pfjea-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd",
        "name": "AVDM1866.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wKNK2s5uCwBNog-in6s1B0X3kojd9iGd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe",
        "name": "AVDM1867.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hjV3SuMPvz2RQE-salAB9gcu2KsPiNLe",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN",
        "name": "AVDM1868.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FhnRp4mH6tYQszuKQXRFLXSfwujnoIRN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz",
        "name": "AVDM1869.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xPJeIO7FLkfrgpPs5V6EJD3rkZ82hVyz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB",
        "name": "AVDM1870.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CEZBbsqmDwdYI-_qp9ind7pjAToM1sBB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y",
        "name": "AVDM1871.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gyOu1Qbm1GYiasrvL4Q6YaOgui_6718y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y",
        "name": "AVDM1872.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qn2TZD0hGFh0II1G0cGWXeuCz0JmS85Y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG",
        "name": "AVDM1873.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1h7tS3KPofnEAy3aOxmi_oKCpoEiAGAcG",
        "aspectRatio": "3/2"
      },
      {
        "id": "10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD",
        "name": "AVDM1874.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10cgUr7sr24Fg3-VJ314EMwxaG-dwtOsD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ojuUUV80SzzW84PDd1CzSFj6iudDsumr",
        "name": "AVDM1875.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ojuUUV80SzzW84PDd1CzSFj6iudDsumr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ojuUUV80SzzW84PDd1CzSFj6iudDsumr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ojuUUV80SzzW84PDd1CzSFj6iudDsumr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ojuUUV80SzzW84PDd1CzSFj6iudDsumr",
        "aspectRatio": "3/2"
      },
      {
        "id": "12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX",
        "name": "AVDM1876.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12fY-mq7D0fIC6e1Thy_rsZzCwTE-IuAX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy",
        "name": "AVDM1877.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pabV-dw5kN8vtNb9h-3JMgZUSXcJSrfy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8",
        "name": "AVDM1878.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MHuovGvIkpjDfB33Z6LMXhiK21WCUvx8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO",
        "name": "AVDM1879.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jGxo70WzQsBLr0yfxCKM6QKBo0rHtYKO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t",
        "name": "AVDM1880.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1s5ba_3DmC0dG2CCPYxAX89R7WcPVHP9t",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1zFFwIMaTbPLURU0JqGjmFRE4-yIkTyFn",
    "slug": "day-02-04112026-wed-slot-019-0000-hrs-to-slot-042-2300-hrs",
    "name": "Day 02 - 04.11.2026 (Wed) | Slot 019 (00:00 Hrs) to Slot 042 (23:00 Hrs)",
    "shortTitle": "Day 02 - 04.11.2026 (Wed)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 02 - 04.11.2026 (Wed) | Slot 019 (00:00 Hrs) to Slot 042 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1zFFwIMaTbPLURU0JqGjmFRE4-yIkTyFn",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ",
      "name": "AVDM0001.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ",
        "name": "AVDM0001.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OK-l-t7LCyak2Qf1VkMrGCj8BNV58-RJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF",
        "name": "AVDM0002.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lECWhBmT1Bwow1WIMgl1jdaFjCEpUcBF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ",
        "name": "AVDM0003.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EBuihfBm6HPGx4PPUSCrepzqYG9nU7hZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ",
        "name": "AVDM0004.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yU9rj_KuLC0-i82DxBj2MMxS3e5JvriJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SELd2vPqn23zT00aMSn6toUFKBxndkJz",
        "name": "AVDM0005.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SELd2vPqn23zT00aMSn6toUFKBxndkJz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SELd2vPqn23zT00aMSn6toUFKBxndkJz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SELd2vPqn23zT00aMSn6toUFKBxndkJz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SELd2vPqn23zT00aMSn6toUFKBxndkJz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab",
        "name": "AVDM0006.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zqGv4EtAeUhsUXUxP4WAbRlaFt50n0Ab",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W",
        "name": "AVDM0007.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aBwf99V5-5kcdcA5aqh1gE2R0AUtGc0W",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ac_g8k-gpMytpcDplR8-McuYXhehUVMe",
        "name": "AVDM0008.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ac_g8k-gpMytpcDplR8-McuYXhehUVMe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ac_g8k-gpMytpcDplR8-McuYXhehUVMe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ac_g8k-gpMytpcDplR8-McuYXhehUVMe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ac_g8k-gpMytpcDplR8-McuYXhehUVMe",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA",
        "name": "AVDM0009.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_S_6m9v4sTcqVw0YuqtEieEcYQwlL0wA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd",
        "name": "AVDM0010.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kxvFIkHqaQY-1zwIkwm6ydM4FLmQNKhd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE",
        "name": "AVDM0011.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iYxWkh14jjhpu6cUP7Bt_fqVLkNwnNWE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B",
        "name": "AVDM0012.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NDuPmPrNwGyZJkkDd16nVa2tgEwYfX2B",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9",
        "name": "AVDM0013.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RRZsJ5aQb1GbOao6cXVzPA2V2kKVEUw9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yYIb6LLyBjgJMlsH05ScwFuGwM-po966",
        "name": "AVDM0014.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yYIb6LLyBjgJMlsH05ScwFuGwM-po966=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yYIb6LLyBjgJMlsH05ScwFuGwM-po966=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yYIb6LLyBjgJMlsH05ScwFuGwM-po966=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yYIb6LLyBjgJMlsH05ScwFuGwM-po966",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw",
        "name": "AVDM0015.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W37Tzm9HMH48d4HluyFG0xHJfbFH61Dw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI",
        "name": "AVDM0016.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-WTcRotVE_76dnG3pJQ1j0Z4mFJCeKpI",
        "aspectRatio": "3/2"
      },
      {
        "id": "10nj9ZscroosycgZhhgn-SBuVgghCxhWP",
        "name": "AVDM0017.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10nj9ZscroosycgZhhgn-SBuVgghCxhWP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10nj9ZscroosycgZhhgn-SBuVgghCxhWP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10nj9ZscroosycgZhhgn-SBuVgghCxhWP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10nj9ZscroosycgZhhgn-SBuVgghCxhWP",
        "aspectRatio": "3/2"
      },
      {
        "id": "13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T",
        "name": "AVDM0018.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13XxJNjf-VcDbXDJESRS_MR5scO7SZu5T",
        "aspectRatio": "3/2"
      },
      {
        "id": "1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e",
        "name": "AVDM0019.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1t_xGaTKJiWFxO_C-lUAw00Tf1DYhDh8e",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN",
        "name": "AVDM0020.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y56gSOCaiyVZkkzZaABwqvvu6Tlr87lN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx",
        "name": "AVDM0021.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z0ytcG0CS93t2Tza5avMYzOX6ttfdflx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr",
        "name": "AVDM0022.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cGimOl0762kvQKgGrHsJ7GsBYMMv9ipr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cmDAgZybgncaU20WXGTzbewuToHp8lSd",
        "name": "AVDM0023.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cmDAgZybgncaU20WXGTzbewuToHp8lSd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cmDAgZybgncaU20WXGTzbewuToHp8lSd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cmDAgZybgncaU20WXGTzbewuToHp8lSd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cmDAgZybgncaU20WXGTzbewuToHp8lSd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ",
        "name": "AVDM0024.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OoIx_7P2Xnynjz9WzLcicXqXSatQpVAJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT",
        "name": "AVDM0025.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OnF2OLQt_p3cDrGIZSvVIeyVsGagb9KT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9",
        "name": "AVDM0026.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1d0IwNuEbcRuzAAuDFW-4CAkNRXMQBpe9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF",
        "name": "AVDM0027.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ynNle6duwyraC3od3JHtA7JrZ_LQZIGF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC",
        "name": "AVDM0028.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pos3K2dQWCclGllVkU7WyA-OF-5-4GEC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN",
        "name": "AVDM0029.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xBMa61VvOO-Lrl8wlCSMtDgLuIr-x_kN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj",
        "name": "AVDM0030.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1B6h2kJ-9pUyoxu2MAB6OJ1c_FrV9fFfj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl",
        "name": "AVDM0031.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cNkO8BNyqgyN2JEfV9EE9i0B9VgHZozl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt",
        "name": "AVDM0032.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cu_pecL_JbGLqrN7cLtrNtLewf-B8Lgt",
        "aspectRatio": "3/2"
      },
      {
        "id": "15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H",
        "name": "AVDM0033.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15PtfNLwJpZGJrcgbZ2jlHxsA3RJeEA4H",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XvNU-k58a83uElOccfqLD-QzHQDQWeWs",
        "name": "AVDM0034.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XvNU-k58a83uElOccfqLD-QzHQDQWeWs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XvNU-k58a83uElOccfqLD-QzHQDQWeWs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XvNU-k58a83uElOccfqLD-QzHQDQWeWs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XvNU-k58a83uElOccfqLD-QzHQDQWeWs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU",
        "name": "AVDM0035.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CGxcbNMFBG_t0DY11IPH8M9b9O9Xg2qU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1",
        "name": "AVDM0036.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uOasykmqAyJkDuPcigrXWg8dbIm0KCH1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV",
        "name": "AVDM0037.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uTfzsT9-msGCLCCGbl9CUKIBIiA-qwzV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a",
        "name": "AVDM0038.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ct1NLCKx8kbq9TudY2oVty1O3rQxys0a",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i",
        "name": "AVDM0039.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-JDWRLs6BPNZXaJgoFgceGAZWHHbtu7i",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn",
        "name": "AVDM0040.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UeP2JYgaK73EuONYeoBJTZGFT_W63ghn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DPY9euoft16LtxXc1wRcOQcyRDyQatgt",
        "name": "AVDM0041.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DPY9euoft16LtxXc1wRcOQcyRDyQatgt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DPY9euoft16LtxXc1wRcOQcyRDyQatgt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DPY9euoft16LtxXc1wRcOQcyRDyQatgt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DPY9euoft16LtxXc1wRcOQcyRDyQatgt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CYePYCTMMljNDbE4XABOwnpdShSkfev6",
        "name": "AVDM0042.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CYePYCTMMljNDbE4XABOwnpdShSkfev6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CYePYCTMMljNDbE4XABOwnpdShSkfev6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CYePYCTMMljNDbE4XABOwnpdShSkfev6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CYePYCTMMljNDbE4XABOwnpdShSkfev6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE",
        "name": "AVDM0043.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bgPdAOC4qLd_KalEEOWh2aWwlgKoG3iE",
        "aspectRatio": "3/2"
      },
      {
        "id": "12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR",
        "name": "AVDM0044.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12pvUL1yS2_rdaVm3R399tT2Ki8RLG9xR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU",
        "name": "AVDM0045.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vnNdmj7-Ny5qkKS25KANE1iz6mNrYHBU",
        "aspectRatio": "3/2"
      },
      {
        "id": "19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT",
        "name": "AVDM0046.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19zbO5Ti7wwDepdDgMdUX7Efj9Kqj5YpT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q",
        "name": "AVDM0047.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xb_m11D6qZMLXHPCiJW1WCl6xq5cNi1Q",
        "aspectRatio": "3/2"
      },
      {
        "id": "16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc",
        "name": "AVDM0048.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16Z5tO_o2EvDpHaMQYu5rTk8ZWpX5fLBc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2",
        "name": "AVDM0049.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yIl6R7mWQeuFfkhCfnqla80gOkVjqJY2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hXg556g3iWMn7CCC3S-efA8oATf48gZx",
        "name": "AVDM0050.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hXg556g3iWMn7CCC3S-efA8oATf48gZx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hXg556g3iWMn7CCC3S-efA8oATf48gZx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hXg556g3iWMn7CCC3S-efA8oATf48gZx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hXg556g3iWMn7CCC3S-efA8oATf48gZx",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1evOLsxQekIiqJezZxyEMghw5gVm-zXDb",
    "slug": "day-03-05112026-thu-slot-043-0000-hrs-to-slot-066-2300-hrs",
    "name": "Day 03 - 05.11.2026 (Thu) | Slot 043 (00:00 Hrs) to Slot 066 (23:00 Hrs)",
    "shortTitle": "Day 03 - 05.11.2026 (Thu)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 03 - 05.11.2026 (Thu) | Slot 043 (00:00 Hrs) to Slot 066 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1evOLsxQekIiqJezZxyEMghw5gVm-zXDb",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY",
      "name": "DSC_5571.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY",
        "name": "DSC_5571.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lBLVimgS0k3DynF-RoGGILyMlrgT6sKY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB",
        "name": "DSC_5572.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Up15v7aGjfG4mgg6XqMRUtmpM-2z_cYB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-",
        "name": "DSC_5574.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1d6fq1lKUwuQSMj7kkOWmEJY6PnSL1V7-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe",
        "name": "DSC_5575.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jgwtNeOvuU-_uArMsw5Dx8oecBarIdJe",
        "aspectRatio": "3/2"
      },
      {
        "id": "18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK",
        "name": "DSC_5576.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18BkT6nW7qipm6VvCYJwBIsm7S5Wkv0XK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3",
        "name": "DSC_5577.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1e0JRq8OjTV97cuvahO_jkTaSrNFRUZD3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9",
        "name": "DSC_5578.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QpWl6p8OYBYADZXH4ORvVnG3zq-pwBI9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x",
        "name": "DSC_5579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hJ1axuHOnRdZoV0LtDa-BrDTwr_8IZ_x",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq",
        "name": "DSC_5580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x-q-MkUxKbgL2IVI_YJeP5CeVYQSMDNq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO",
        "name": "DSC_5581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jqkRrrgEmKOcDjMer1DilwLfaxq_APVO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg",
        "name": "DSC_5582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ks60_vntOZ0QotbVNx08XlXBJAXNlrUg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87",
        "name": "DSC_5583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZhWTXFv-nnACC55TtGIz8rWL3_xgsG87",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr",
        "name": "DSC_5584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iYmL4xMkDdYONBnXArjxPLUigSvT6YIr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c",
        "name": "DSC_5585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q7c9qJQcmSv3zoODZ3eohTIgxhQePW6c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8",
        "name": "DSC_5586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SGTqUgBJUL8URscCMDvH6M2xvx3yJTc8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ",
        "name": "DSC_5587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a-VlLlyPEO3S9GRmvLYOpOTV4hZkDqXJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4",
        "name": "DSC_5588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F0Y8GC9LMjcaXQw9ZByjF-StK2_JvZY4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ",
        "name": "DSC_5589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Hpl3BrDCDIc9i79EaFbo9UZxa8To96GZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "11io6vkxQ7avHV3V9AvDvZifGqruUBN7q",
        "name": "DSC_5590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11io6vkxQ7avHV3V9AvDvZifGqruUBN7q=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11io6vkxQ7avHV3V9AvDvZifGqruUBN7q=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11io6vkxQ7avHV3V9AvDvZifGqruUBN7q=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11io6vkxQ7avHV3V9AvDvZifGqruUBN7q",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K",
        "name": "DSC_5591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u6E_tj8Rf37x1xbyt7LlDLcMsiPIW3-K",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L",
        "name": "DSC_5594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SNqKNFyLW6ef_wH9zDLPBPu68tEnmc7L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao",
        "name": "DSC_5596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vT7Lj1OrBH_QlyfuDB_Fbo_Eh9lsUqao",
        "aspectRatio": "3/2"
      },
      {
        "id": "1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV",
        "name": "DSC_5597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1h2Zn6EY9I2VjJQ_wY_bdCRACgHBwqdxV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB",
        "name": "DSC_5598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1V76T52Sly5FVxJSX0dTW_4xV2SG96dXB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1",
        "name": "DSC_5599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UzP5spDqR7xwxIx42JYNzorjmoGWFtz1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA",
        "name": "DSC_5600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1L7QDL8TbXXr-v9zxby-gwZC1Bk6-J6RA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h",
        "name": "DSC_5601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pKbpG7waypcGqOXOwH6Hb_bxEnJKev3h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9",
        "name": "DSC_5602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SyFJqLBRKDDhQKBD6JVTssBPLfDlanS9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7",
        "name": "DSC_5603.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c5R-eXXMiXpwfV1eQqSSQXIdRGLKOch7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld",
        "name": "DSC_5604.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-L4QFC-sZk5Q_x_Ui4hrGnRoPH85pqld",
        "aspectRatio": "3/2"
      },
      {
        "id": "1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw",
        "name": "DSC_5605.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1y16nPsV-Og_5mKS6bjraBQv3hFtCGWjw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm",
        "name": "DSC_5606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EcxPHfVmgyZ08mn08TyPTUGcu6c6Hqqm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6",
        "name": "DSC_5607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dcBrNISO-zviO_yy_9YWeV3xSUOWCoY6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516",
        "name": "DSC_5608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZgYUtRmcYkIJalj4g_BhOQU3Hoect516",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1",
        "name": "DSC_5609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Z3ZHSfeTtoKjcyjPcZex9sXkqwe41Yr1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M",
        "name": "DSC_5610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XRQRs6x-jPVKv-P2N-xWxvKm3dol-46M",
        "aspectRatio": "3/2"
      },
      {
        "id": "1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8",
        "name": "DSC_5611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1s6Tny7dsFYwDynBPohx7F45W2bBsciQ8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX",
        "name": "DSC_5612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1f7VGpc-P3zjnIEubcVrAaVPF0Hys2ejX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV",
        "name": "DSC_5613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DZQWqkKGiXxFTxjTBscbXaghzVdW1RwV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz",
        "name": "DSC_5614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rDh-pTHvpPpp0TRbZ4ttsRCqmFvAlBWz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22",
        "name": "DSC_5615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EtAylPVEPdRP6NmPrRTzY_LX_S_1Hi22",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K",
        "name": "DSC_5616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WEdwT7HGs_DwzjpWZ4s4DFGZYH_pqG9K",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97",
        "name": "DSC_5617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VRQcagaIt9ZMfkB7glAuuSlEp-33-J97",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4",
        "name": "DSC_5618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BDpcPoCIxFsum82_VbAzIhY2SrECQFQ4",
        "aspectRatio": "3/2"
      },
      {
        "id": "109yCvyC_xbFoW9epjJ1oSMOJbthsig6s",
        "name": "DSC_5619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/109yCvyC_xbFoW9epjJ1oSMOJbthsig6s=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/109yCvyC_xbFoW9epjJ1oSMOJbthsig6s=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/109yCvyC_xbFoW9epjJ1oSMOJbthsig6s=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=109yCvyC_xbFoW9epjJ1oSMOJbthsig6s",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj",
        "name": "DSC_5620.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qqvYMU_OQTVG84YfCiytxMQE4jYl8RIj",
        "aspectRatio": "3/2"
      },
      {
        "id": "12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn",
        "name": "DSC_5621.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12pdkhdDHEtZgk2iSbQ2Gl8UjHdfJJpGn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv",
        "name": "DSC_5622.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wIdMssKG1EEjHR-zPy2R6GNxeU26bFqv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh",
        "name": "DSC_5623.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ASTfuRCNodrZC8UFD5ybUFWN0jWr9yYh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM",
        "name": "DSC_5624.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T64uLffEcJVCNBtVk9h9sf3JsGJXnfLM",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1kE6BfFl2Un_8BwPE6B_3VPixQC9X3nq6",
    "slug": "day-04-06112026-fri-slot-067-0000-hrs-to-slot-090-2300-hrs",
    "name": "Day 04 - 06.11.2026 (Fri) | Slot 067 (00:00 Hrs) to Slot 090 (23:00 Hrs)",
    "shortTitle": "Day 04 - 06.11.2026 (Fri)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 04 - 06.11.2026 (Fri) | Slot 067 (00:00 Hrs) to Slot 090 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1kE6BfFl2Un_8BwPE6B_3VPixQC9X3nq6",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w",
      "name": "AVDM0606.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w",
        "name": "AVDM0606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XWPyrrilo-4VbKcMrkDfYPj6THXxtY7w",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM",
        "name": "AVDM0607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cxpa9yU5bQzSW0HNOZ0HjGAygwFXB5xM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm",
        "name": "AVDM0608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jqBWZpBvUWB3-_pTeHFY_XlVr-B8vLRm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JON96TcjPWSre4Bok5yDNyc1U1nj0x17",
        "name": "AVDM0609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JON96TcjPWSre4Bok5yDNyc1U1nj0x17=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JON96TcjPWSre4Bok5yDNyc1U1nj0x17=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JON96TcjPWSre4Bok5yDNyc1U1nj0x17=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JON96TcjPWSre4Bok5yDNyc1U1nj0x17",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ",
        "name": "AVDM0610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZqfhHRGx45bwqzcTf8Ft7vXod4tMR-wZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678",
        "name": "AVDM0611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1axIxX4iHbk7hHNJDX9Tg7Msz_hQDC678",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn",
        "name": "AVDM0612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xioKVsQaPcto2SGoQ5_iU1aSKeNbMaQn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA",
        "name": "AVDM0613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jdGOmwjBPX5z4FoL2aXZUNzSWrMBVMHA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7",
        "name": "AVDM0614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vK1odNCtFC2m6dXXbB11Wsaul7fM3xv7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uJypfBduBprfmZdZdXit-nnxjEGDVHZp",
        "name": "AVDM0615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uJypfBduBprfmZdZdXit-nnxjEGDVHZp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uJypfBduBprfmZdZdXit-nnxjEGDVHZp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uJypfBduBprfmZdZdXit-nnxjEGDVHZp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uJypfBduBprfmZdZdXit-nnxjEGDVHZp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP",
        "name": "AVDM0616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GzuL0xuwwS5H9dIFInN8G1qTVTmt-bCP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm",
        "name": "AVDM0617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dN6TpImBP5_GtLKmBIWAcnR60WiVKZqm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY",
        "name": "AVDM0618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KfWVCbauDa5Mx3Ky6yHAI7-gxhiz0pCY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9",
        "name": "AVDM0619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1R88vPh3MVK_FXfCIoLQcS0ddgIbp9Wg9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB",
        "name": "AVDM0620.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x3YWSKptI-MBUNUID2aAbnyaTmYYR9NB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u",
        "name": "AVDM0621.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TMXOyimcWIyOXlh8oNXEG0na5EaaI08u",
        "aspectRatio": "3/2"
      },
      {
        "id": "1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y",
        "name": "AVDM0622.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v5lL9AZq-RpJgCt7XyDyvHYN3QLI9L7Y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM",
        "name": "AVDM0623.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Jep6BuZOmGG-_jp2Nfmcw0jzJDTTPkDM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm",
        "name": "AVDM0624.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bVDJyb33ecLq0aEH47U49w5x_14Mx0Xm",
        "aspectRatio": "3/2"
      },
      {
        "id": "13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg",
        "name": "AVDM0625.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13isBtbhvChO4Mhrq18KeeNyqGJG7OiWg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_",
        "name": "AVDM0626.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IbQlfTqDZSU4C13ZdnonXYIBdhR7-TN_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LSF7MqSciyN9vMNdss873Rrau_o94bJb",
        "name": "AVDM0627.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LSF7MqSciyN9vMNdss873Rrau_o94bJb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LSF7MqSciyN9vMNdss873Rrau_o94bJb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LSF7MqSciyN9vMNdss873Rrau_o94bJb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LSF7MqSciyN9vMNdss873Rrau_o94bJb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sUaJezu92f-V4Ldy0RaajeciwSWeBadO",
        "name": "AVDM0628.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sUaJezu92f-V4Ldy0RaajeciwSWeBadO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sUaJezu92f-V4Ldy0RaajeciwSWeBadO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sUaJezu92f-V4Ldy0RaajeciwSWeBadO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sUaJezu92f-V4Ldy0RaajeciwSWeBadO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV",
        "name": "AVDM0629.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Nkpvhjwlplg49oY0ifPBW9UXVmWGu1EV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh",
        "name": "AVDM0630.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DbCKBTK5TNl_e7cCJxltN3UCywc3crwh",
        "aspectRatio": "3/2"
      },
      {
        "id": "19AMiEY-hY942p0UQPFCvYvbph0m8Y99a",
        "name": "AVDM0631.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19AMiEY-hY942p0UQPFCvYvbph0m8Y99a=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19AMiEY-hY942p0UQPFCvYvbph0m8Y99a=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19AMiEY-hY942p0UQPFCvYvbph0m8Y99a=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19AMiEY-hY942p0UQPFCvYvbph0m8Y99a",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX",
        "name": "AVDM0632.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yFx6swvZEE-9NVq64ZCg98cs39y2UNwX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c1d0WlXsNo2D3RH780qonu_fArmHXSyy",
        "name": "AVDM0633.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c1d0WlXsNo2D3RH780qonu_fArmHXSyy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c1d0WlXsNo2D3RH780qonu_fArmHXSyy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c1d0WlXsNo2D3RH780qonu_fArmHXSyy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c1d0WlXsNo2D3RH780qonu_fArmHXSyy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa",
        "name": "AVDM0634.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F_tg_De06JmFLP5PAo1f1_cX3SKH7zMa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj",
        "name": "AVDM0635.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uOX93I4FIMxOzkLbJ4buZXFKWACucLKj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2",
        "name": "AVDM0636.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KxbpCyl234rIQVDQYHHNk7HWc8OtlKy2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP",
        "name": "AVDM0637.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YjSAKqIYKdt7pgqXJiNd_Zv8AHepluvP",
        "aspectRatio": "3/2"
      },
      {
        "id": "17J0UYQBdXIUPsPq6nwCid__KKBwMui6z",
        "name": "AVDM0638.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17J0UYQBdXIUPsPq6nwCid__KKBwMui6z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17J0UYQBdXIUPsPq6nwCid__KKBwMui6z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17J0UYQBdXIUPsPq6nwCid__KKBwMui6z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17J0UYQBdXIUPsPq6nwCid__KKBwMui6z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa",
        "name": "AVDM0639.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qA597Yp5o_AHtKipj-mLTKaU-WZe9JGa",
        "aspectRatio": "3/2"
      },
      {
        "id": "18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr",
        "name": "AVDM0640.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18FBocIYjU8nY28Ss1RGM9x0yxcnA55sr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz",
        "name": "AVDM0641.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1feJ2TgkQKYfZFNH7EvDXonTuRK7uwQnz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX",
        "name": "AVDM0642.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D2K7Kx6JEfdnu-b8s8zQ5iIKzsv5lkvX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1",
        "name": "AVDM0643.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ItmE2XbsIATbeyC9CmufxQV1lmDvGnm1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk",
        "name": "AVDM0644.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DZ0sb80OhQf6GAluhGXpJUKCAuHayExk",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO",
        "name": "AVDM0645.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NtQGg9lWM5MlqEkjitZWVIoqnhk8DqtO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo",
        "name": "AVDM0646.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uATgewcZkJeEcPD_4n02Gihi6V7EsKQo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR",
        "name": "AVDM0647.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n4EiMz3YTHLKt_EQwRLx1nHslrHCDydR",
        "aspectRatio": "3/2"
      },
      {
        "id": "15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah",
        "name": "AVDM0648.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15n9T7Ml_14Ra2soz36zt9P1sFtBy6kah",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS",
        "name": "AVDM0649.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uKfz_E0W6a-0zs8KUIgwFhC1lSiyO6aS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT",
        "name": "AVDM0650.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_fG2KMpanUPZNjcqorukQk_SiRd4QyFT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv",
        "name": "AVDM0651.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nKRnRtS6wjfuLNQ33eSfSP4aO8EHbkLv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF",
        "name": "AVDM0652.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WJS-wPWGRCks82wIcJlN3-vMFxyCGzFF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82",
        "name": "AVDM0653.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JMkxbLqG9P9kXJ_7pchIoBuIuEveJn82",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd",
        "name": "AVDM0654.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fC0DtlKYVaqTf8lKbDt4eiIsA7R7gdzd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35",
        "name": "AVDM0655.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nhdqOxnJKJdkX8r3pyTJyOsaGNSzkN35",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "14VgPRm7PWUdXT-MP84NH4ETQYjYdlObq",
    "slug": "day-05-07112026-sat-slot-091-0000-hrs-to-slot-114-2300-hrs",
    "name": "Day 05 - 07.11.2026 (Sat) | Slot 091 (00:00 Hrs) to Slot 114 (23:00 Hrs)",
    "shortTitle": "Day 05 - 07.11.2026 (Sat)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 05 - 07.11.2026 (Sat) | Slot 091 (00:00 Hrs) to Slot 114 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/14VgPRm7PWUdXT-MP84NH4ETQYjYdlObq",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ",
      "name": "DSC_0810.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ",
        "name": "DSC_0810.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1B-D3UDnhqHojJIogc2kCldmGwNx69yeZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-",
        "name": "DSC_0811.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aGxzHHPFL65lYh9WoOxoO4VRS5FFBEo-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO",
        "name": "DSC_0812.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Xe2evDd30fq9bpVnvLdDtWB8BZKd-tdO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm",
        "name": "DSC_0813.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ib0fs0VmuFs-CF5TP9PyCyrjiwxPtBNm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY",
        "name": "DSC_0814.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bLowVqgp2ewpCTiZLTXzVLnjelpQ5beY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW",
        "name": "DSC_0815.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cqLb2-6pqnzw1CUVI18awxQIm_jw-AuW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1mxrrIr-VWj50EVkk0YVt19uEowuKtfks",
        "name": "DSC_0816.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mxrrIr-VWj50EVkk0YVt19uEowuKtfks=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1mxrrIr-VWj50EVkk0YVt19uEowuKtfks=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mxrrIr-VWj50EVkk0YVt19uEowuKtfks=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mxrrIr-VWj50EVkk0YVt19uEowuKtfks",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC",
        "name": "DSC_0817.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uXky3jC4ltVqdnjbT9ly2aQsGS3ceLuC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd",
        "name": "DSC_0818.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xK3-Pfl-RBOp4amutlNhRClbRqocpyvd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8",
        "name": "DSC_0819.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oeUhSE_98r9dGeVEgTn57W2Cm_xM5uf8",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc",
        "name": "DSC_0820.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AVwm5EvmdCbO4mOXhPJiHqdqgR1WpVYc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj",
        "name": "DSC_0822.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_xRYnjUPyJ1aqJpAgajV6_LOx97sBYdj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg",
        "name": "DSC_0823.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iouMKjpbwB7spEjNCBtsBbxw2JOYS3Pg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX",
        "name": "DSC_0824.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oouem-8Kua_yZSbD1MkpcZ75O1S1agbX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk",
        "name": "DSC_0825.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FOY5b9H4gudDMCxII_1CTvQrbf0z67Zk",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm",
        "name": "DSC_0826.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nuAUQ-KSgaj6XJosTl-TIO42nGEnQHJm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1",
        "name": "DSC_0828.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZxISGq0oCQurbk7jdX2vvqSeTXXq45Y1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs",
        "name": "DSC_0829.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ne4_IkWA0R3-pAx1DE092uVkisZlR1Zs",
        "aspectRatio": "3/2"
      },
      {
        "id": "11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l",
        "name": "DSC_0830.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11R0c2js1g2E5QrBtBZBt7i1RfTHcpj1l",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n",
        "name": "DSC_0832.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fqI3sWHoIr0JAkoxupgqXo-wfc_75T7n",
        "aspectRatio": "3/2"
      },
      {
        "id": "16zVx3igmApyEigb6HMPLcdVzDFD8tVGi",
        "name": "DSC_0833.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16zVx3igmApyEigb6HMPLcdVzDFD8tVGi=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16zVx3igmApyEigb6HMPLcdVzDFD8tVGi=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16zVx3igmApyEigb6HMPLcdVzDFD8tVGi=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16zVx3igmApyEigb6HMPLcdVzDFD8tVGi",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT",
        "name": "DSC_0834.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vL3y4w6iQw4PXZqeUQWMYuvHoxOAVuZT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41",
        "name": "DSC_0835.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HqqqDd4dQxx3G35rJwT_p5dG1DCiAK41",
        "aspectRatio": "3/2"
      },
      {
        "id": "1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf",
        "name": "DSC_0836.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1skyzPGJ2Svs7VYe1RDo5bBB5asuBwArf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9",
        "name": "DSC_0838.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qKoKfwvBLfp-jQ41R3XAvPsHwMdoJqe9",
        "aspectRatio": "3/2"
      },
      {
        "id": "17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1",
        "name": "DSC_0839.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17Nnz0VpJLzWV6G-aYIlIkofPCucVMjp1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y",
        "name": "DSC_0840.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AoExSl9PJSNVBRhMvei4KOF5qnzzaR5y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-UPHMhNdxi41hOudngIoVbJvjPqe3527",
        "name": "DSC_0841.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-UPHMhNdxi41hOudngIoVbJvjPqe3527=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-UPHMhNdxi41hOudngIoVbJvjPqe3527=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-UPHMhNdxi41hOudngIoVbJvjPqe3527=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-UPHMhNdxi41hOudngIoVbJvjPqe3527",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV",
        "name": "DSC_0845.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pcX2-TqUa2WI5-_-6oPB_TIyS7wALnRV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo",
        "name": "DSC_0846.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZomfZwdCnRjbCUL2XU50ODvx7lmjlhAo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ",
        "name": "DSC_0847.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ok5EDqlM0xmIk_kp-1en39X97jBQ_2fJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V",
        "name": "DSC_0848.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cR1pO5NIXZgNFrW0xDzgJ1O0x-G_CT1V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY",
        "name": "DSC_0849.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F3mxYiXq5JuMr0OAWh2AcYXsZd2z05IY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe",
        "name": "DSC_0850.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aIQv9xYmmGwM4HW3CdBbEaf5JeIdQzoe",
        "aspectRatio": "3/2"
      },
      {
        "id": "17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI",
        "name": "DSC_0851.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17qJ5FcOMXEsbc1XZhsdgv1jqEpERnJrI",
        "aspectRatio": "3/2"
      },
      {
        "id": "106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM",
        "name": "DSC_0852.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=106bsB3fTIaG0Lk4o_hSdt82wMTE78xaM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn",
        "name": "DSC_0853.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Jgz80HK4VDxnwXfOKEWisJDA2uwjRXSn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h",
        "name": "DSC_0854.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x2UqQL_d-5_bsKOAADVEte3mJe5yL_0h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ",
        "name": "DSC_0855.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1WyFXFy6iA7prYgWHxLBBwSlnp28ooGpQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV",
        "name": "DSC_0856.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OgjCW1Mfk4H-Q_VgCCc6QgY4Q1XV-4YV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT",
        "name": "DSC_0858.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gKwyD4cJ3IBvVa9wBCdq7WyAZHdxcFeT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1R5EzM-UN92OHi4juoBp89wwemt9o1UqI",
        "name": "DSC_0859.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1R5EzM-UN92OHi4juoBp89wwemt9o1UqI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1R5EzM-UN92OHi4juoBp89wwemt9o1UqI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1R5EzM-UN92OHi4juoBp89wwemt9o1UqI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1R5EzM-UN92OHi4juoBp89wwemt9o1UqI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04",
        "name": "DSC_0860.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yAkkqpPUOfrTxgoVeYRNxA6_H6IS2D04",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g",
        "name": "DSC_0861.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZYG9AcAMr-SDWGM4Jy9l5zBCKjSYD-2g",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN",
        "name": "DSC_0862.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kNEA7ta5sLgZZcd0SQa1T9_sY2okPhlN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G",
        "name": "DSC_0863.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uwdv5eTTK5KukzCnaiWI2Ldajd6vwt1G",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly",
        "name": "DSC_0865.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T2hu5o92V4OuWxLlVf4qjTQc4-GCkFly",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2",
        "name": "DSC_0866.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W_eWDSovY96eF9_oQmsRjSo9dTIPyzm2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG",
        "name": "DSC_0867.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1677eG3nz1ut-BY6dk8xlw3Z8DJnFM6HG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB",
        "name": "DSC_0868.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BXwwTbji6jv_NRM5z5O8yoDOiZWiriaB",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1ywg-NlvFeSIh_APZDwXt_hrlInfrnrel",
    "slug": "day-06-08112026-sun-slot-115-0000-hrs-to-slot-138-2300-hrs",
    "name": "Day 06 - 08.11.2026 (Sun) | Slot 115 (00:00 Hrs) to Slot 138 (23:00 Hrs)",
    "shortTitle": "Day 06 - 08.11.2026 (Sun)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 06 - 08.11.2026 (Sun) | Slot 115 (00:00 Hrs) to Slot 138 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ywg-NlvFeSIh_APZDwXt_hrlInfrnrel",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM",
      "name": "DSC_2135.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM",
        "name": "DSC_2135.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZaF2z8KQNFav4mXKUqX2nEcTLB1HVKzM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF",
        "name": "DSC_2136.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ptKwTwq6tROzEJ_gs9GCGPxYcqCS_8bF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa",
        "name": "DSC_2137.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rw26rUj8EdwSNPbQEQu2SEYs-PZdjzwa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt",
        "name": "DSC_2138.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ugDgq9iHpZakfSpmS9SZdT6RJcm_AWmt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I",
        "name": "DSC_2139.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T46kRuXCpQ9icsZENkMxUMOLWF16vv8I",
        "aspectRatio": "3/2"
      },
      {
        "id": "15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU",
        "name": "DSC_2140.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15r7E4TADkH4ftt-ldRrKyhGuC6-3f2CU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU",
        "name": "DSC_2141.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Py-aB5E4ZSr5Adg-haj6fcf2eVsRfjtU",
        "aspectRatio": "3/2"
      },
      {
        "id": "123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R",
        "name": "DSC_2142.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=123SXMHZWzcAz1G1kvSrlAQArHNwTjJ0R",
        "aspectRatio": "3/2"
      },
      {
        "id": "1q9LJJs4970T4at2cEvIVoZXozB4GfRzq",
        "name": "DSC_2143.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1q9LJJs4970T4at2cEvIVoZXozB4GfRzq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1q9LJJs4970T4at2cEvIVoZXozB4GfRzq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1q9LJJs4970T4at2cEvIVoZXozB4GfRzq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1q9LJJs4970T4at2cEvIVoZXozB4GfRzq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ",
        "name": "DSC_2144.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hVXJQ0fzrE3kwCIY5160pM9s1IrVijnQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C",
        "name": "DSC_2146.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sN7BgTqcQQo_gKFvx5l4Jyl_mVOang2C",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc",
        "name": "DSC_2147.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xfv8upO8HxLTjP9RVxA7NNCq43lnbHYc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nvY2-GafzISm5hPSZFWBFjE2afsqETs0",
        "name": "DSC_2148.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nvY2-GafzISm5hPSZFWBFjE2afsqETs0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nvY2-GafzISm5hPSZFWBFjE2afsqETs0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nvY2-GafzISm5hPSZFWBFjE2afsqETs0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nvY2-GafzISm5hPSZFWBFjE2afsqETs0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ",
        "name": "DSC_2149.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jQb5C2ueTsFS4e_cmP4yAuUaLS-70ZBZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1afWuw008kxBTnmOLQXPFPMilen0M59Sm",
        "name": "DSC_2150.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1afWuw008kxBTnmOLQXPFPMilen0M59Sm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1afWuw008kxBTnmOLQXPFPMilen0M59Sm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1afWuw008kxBTnmOLQXPFPMilen0M59Sm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1afWuw008kxBTnmOLQXPFPMilen0M59Sm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl",
        "name": "DSC_2151.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1czc_QJhdRS3VjFEyFZCqwyiqYY2OyGOl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1",
        "name": "DSC_2152.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AlU1rVQuLLAv2qDV4_xnCvDvrcVgs7T1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dfvKEED60aNRq9Cm2avwXPpb66h417IJ",
        "name": "DSC_2153.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dfvKEED60aNRq9Cm2avwXPpb66h417IJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dfvKEED60aNRq9Cm2avwXPpb66h417IJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dfvKEED60aNRq9Cm2avwXPpb66h417IJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dfvKEED60aNRq9Cm2avwXPpb66h417IJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl",
        "name": "DSC_2154.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1P0qWltob4Ui5PH8j8NfckMcT3R9Ld5Sl",
        "aspectRatio": "3/2"
      },
      {
        "id": "12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik",
        "name": "DSC_2155.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12gabl6mHYBDzMiyjRjeFU-QEiuMmQzik",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj",
        "name": "DSC_2156.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PhzfZZn-lEqNNrXuMOv1Aw_jvmuCQmgj",
        "aspectRatio": "3/2"
      },
      {
        "id": "12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L",
        "name": "DSC_2157.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12zRd2vn9CHb30CwOWpc2OUQn1zFtK78L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL",
        "name": "DSC_2158.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a8KIZCUXfVfngG3m0TbSAbUl0dNAiQAL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R",
        "name": "DSC_2159.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1arND8fiBDrpSyQ83wsGk6PSLJdFvZ06R",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl",
        "name": "DSC_2161.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ojGRTc3WnJG4xNJoz9Mnpr-mSU5mvjRl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe",
        "name": "DSC_2162.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1py9GON-LMC4DlTuojy9eNZ_cuYAVNoUe",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B",
        "name": "DSC_2163.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DIn79tzHWDz5SxuYYnsm8ZcVNlKxd33B",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr",
        "name": "DSC_2164.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XvYuXfniGT3A624JsUi8vYhyDZLY6lEr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7",
        "name": "DSC_2165.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cOw3v4SVi6XnoFzu7hr4WpHqD3lsaFP7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94",
        "name": "DSC_2166.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GUHjvM0LcRqoTZ9VTnfM0k3qcmDhAX94",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9",
        "name": "DSC_2167.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TAe42dglHF44UzV8aIFY0fQsBUiu6eK9",
        "aspectRatio": "3/2"
      },
      {
        "id": "19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH",
        "name": "DSC_2168.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19yI9vsRqAtePsm4P1NFSL3tMnGiFoswH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv",
        "name": "DSC_2169.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n13nM4hKam_rIBUm6eM7O2Ai_O4BFxpv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq",
        "name": "DSC_2170.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Iy0uoCaEW4zeLejtd74iGP0Bnc2Fymjq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp",
        "name": "DSC_2171.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pmd1uWMV8RM6W795jAhb7MfcCwPxD2Tp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH",
        "name": "DSC_2172.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1miInfgKSPI1HAxSmf4aFgqzPmC52CBTH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb",
        "name": "DSC_2173.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KJ3ce6tMCS1VMWeZ1KUgcFao7hfLgIvb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd",
        "name": "DSC_2174.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xlAOp8HnHvTVy0nfytdSJjruqZndmGWd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy",
        "name": "DSC_2175.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ApWiZ3kaJyr5N3kfr7mGsVpopbyfV4Oy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_",
        "name": "DSC_2176.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zm6NsC9V9uUj7B_Gs7AfDR2P5PPYbvy_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0",
        "name": "DSC_2177.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fGw7o08lKn9QudKmIsVZOxX-N1BIyvL0",
        "aspectRatio": "3/2"
      },
      {
        "id": "11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt",
        "name": "DSC_2178.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11Spyp3U2Yh1z02jMFsq-B3UetGYNTgyt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z",
        "name": "DSC_2179.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MoCiL-s2NuLXYvVbI5P733io-fOmhk9z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_",
        "name": "DSC_2180.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Cxhve6-2ZISdDXuDVLGmbUjALQaAA1J_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Psousz4wfGHkvpKNemmy1HNrxnMt27wz",
        "name": "DSC_2181.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Psousz4wfGHkvpKNemmy1HNrxnMt27wz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Psousz4wfGHkvpKNemmy1HNrxnMt27wz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Psousz4wfGHkvpKNemmy1HNrxnMt27wz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Psousz4wfGHkvpKNemmy1HNrxnMt27wz",
        "aspectRatio": "3/2"
      },
      {
        "id": "18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D",
        "name": "DSC_2182.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18FbRESYwzIeFIRR6VJe7v8hPag7kyI3D",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GVrZpP8XpyPueZzaejZGBrKuMcblNun4",
        "name": "DSC_2183.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GVrZpP8XpyPueZzaejZGBrKuMcblNun4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GVrZpP8XpyPueZzaejZGBrKuMcblNun4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GVrZpP8XpyPueZzaejZGBrKuMcblNun4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GVrZpP8XpyPueZzaejZGBrKuMcblNun4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS",
        "name": "DSC_2184.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vlxCM2_wqwSKhYDZX2tSh7iQLrArsdDS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3",
        "name": "DSC_2185.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ka1ujx0CxMg_B2bqvOGV5P5FPmYYcli3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ",
        "name": "DSC_2186.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LjfyG-KYfCCHHsoYmqRUdAxFIrHVCosJ",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1McqHDu3ZYK6BeLPgm8vEMcupzT_zVjVT",
    "slug": "day-07-09112026-mon-slot-139-0000-hrs-to-slot-162-2300-hrs",
    "name": "Day 07 - 09.11.2026 (Mon) | Slot 139 (00:00 Hrs) to Slot 162 (23:00 Hrs)",
    "shortTitle": "Day 07 - 09.11.2026 (Mon)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 07 - 09.11.2026 (Mon) | Slot 139 (00:00 Hrs) to Slot 162 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1McqHDu3ZYK6BeLPgm8vEMcupzT_zVjVT",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE",
      "name": "AVDM1937.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE",
        "name": "AVDM1937.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qFnLvUsoTafEFUeX6mmitPOAJjxiNEgE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj",
        "name": "AVDM1938.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VtUQI6Rz73kyZ8sdnMwMWBC_xJ-nq7fj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG",
        "name": "AVDM1939.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1e_sjBNEhDX_QVGfTsUGsWtmRf99gPYNG",
        "aspectRatio": "3/2"
      },
      {
        "id": "18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL",
        "name": "AVDM1940.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18bwSftG13Mpt9JcocL7_ZrJ-nw8iv7mL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU",
        "name": "AVDM1941.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NsvpLwtqYgSkZk1YvrN-T1lFQ6oRHTwU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-U0QiWTISxBffnect6LcWZZzfZhbAMeR",
        "name": "AVDM1942.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-U0QiWTISxBffnect6LcWZZzfZhbAMeR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-U0QiWTISxBffnect6LcWZZzfZhbAMeR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-U0QiWTISxBffnect6LcWZZzfZhbAMeR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-U0QiWTISxBffnect6LcWZZzfZhbAMeR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-",
        "name": "AVDM1943.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PMtQ-oVorcG9UfFGbZrg18dJEjU4To0-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2",
        "name": "AVDM1944.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AWoA9-tJ2cjkHyoci0X3xwdjL7_jU4I2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn",
        "name": "AVDM1945.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T1aiapXWzKjwGA08PVbDUe0lF1nbCeGn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC",
        "name": "AVDM1946.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1J5Mh0evtS4j6iPCFhI90_KP_B9iIvvPC",
        "aspectRatio": "3/2"
      },
      {
        "id": "11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW",
        "name": "AVDM1947.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11qkAcUMrVY9MPMfY9t-9YGam2SBCtvlW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vQITc2iot-1V_bNd9G80GTIWdskC3vFs",
        "name": "AVDM1948.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vQITc2iot-1V_bNd9G80GTIWdskC3vFs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vQITc2iot-1V_bNd9G80GTIWdskC3vFs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vQITc2iot-1V_bNd9G80GTIWdskC3vFs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vQITc2iot-1V_bNd9G80GTIWdskC3vFs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2",
        "name": "AVDM1949.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hIjgOkKmXVIaMkCDfbNLKTdtTJQvqXv2",
        "aspectRatio": "3/2"
      },
      {
        "id": "15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_",
        "name": "AVDM1950.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15ifXK2uDLFNjTyt9N1hj-NNenL0eKt3_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QJa-h70eZmsuufs74MRCOWj9cRWAft4x",
        "name": "AVDM1951.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QJa-h70eZmsuufs74MRCOWj9cRWAft4x=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QJa-h70eZmsuufs74MRCOWj9cRWAft4x=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QJa-h70eZmsuufs74MRCOWj9cRWAft4x=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QJa-h70eZmsuufs74MRCOWj9cRWAft4x",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6",
        "name": "AVDM1952.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TbUkiSW-G1p7ZcKJkFP7FAyPWrrhFJg6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ",
        "name": "AVDM1953.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ia9-CqJjgtb3FsTXHfOTDCPq_cRm7yrZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT",
        "name": "AVDM1954.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Sq9rJNmjzfBaEDKNcl55UDUfLPfspMBT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL",
        "name": "AVDM1955.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zw5uvcJNC3Ozu7JYTWFYJGTV4y7e3TLL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6",
        "name": "AVDM1956.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pRizfsH-j1kfvlISyJyD9mSzBHGpoTH6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d",
        "name": "AVDM1957.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1feXVFKvlLWou1TIdFKqzfy0LC_6PPn2d",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE",
        "name": "AVDM1958.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n6gtbpnRI_CT_GoPEsAdaSz63FfXYdBE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75",
        "name": "AVDM1959.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KR2B-jQ95ifVFAQV7B8BLB50j58_C-75",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo",
        "name": "AVDM1960.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pTapDnox6oYbFp-a9eE4zhjITI5GYXuo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB",
        "name": "AVDM1961.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1P_hCouhpX1EpzzuWiitrFp4h-JMu14aB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz",
        "name": "AVDM1962.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BxZCoeVLdD8j3hTxSmRsbTA5QsZdSrFz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q",
        "name": "AVDM1963.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Frtit3bdCwDKiY-SF1lHRfp8_Ix83q5q",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc",
        "name": "AVDM1964.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y7k5c_ychTbz11v832Cs0IEYoXVsHkoc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hEZlftWny1dpf4F0v0mriiroUtKXYXDM",
        "name": "AVDM1965.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hEZlftWny1dpf4F0v0mriiroUtKXYXDM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hEZlftWny1dpf4F0v0mriiroUtKXYXDM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hEZlftWny1dpf4F0v0mriiroUtKXYXDM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hEZlftWny1dpf4F0v0mriiroUtKXYXDM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z7s6aplUNHpajDR531zgzqK8tor875qw",
        "name": "AVDM1966.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z7s6aplUNHpajDR531zgzqK8tor875qw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z7s6aplUNHpajDR531zgzqK8tor875qw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z7s6aplUNHpajDR531zgzqK8tor875qw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z7s6aplUNHpajDR531zgzqK8tor875qw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6",
        "name": "AVDM1967.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1t4snDXnp0DMF3OV6JZma-LznhZUmTiv6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S",
        "name": "AVDM1968.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UrYw77fCtKwQWUqvA4AQRgnF9EFPL9-S",
        "aspectRatio": "3/2"
      },
      {
        "id": "11A_zACa-rnDZtUre4moPamcu1q7CngZ-",
        "name": "AVDM1969.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11A_zACa-rnDZtUre4moPamcu1q7CngZ-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/11A_zACa-rnDZtUre4moPamcu1q7CngZ-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/11A_zACa-rnDZtUre4moPamcu1q7CngZ-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=11A_zACa-rnDZtUre4moPamcu1q7CngZ-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I",
        "name": "AVDM1970.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sSAWYXpSpD_Lavp44_GtzBP7ZVWLLX1I",
        "aspectRatio": "3/2"
      },
      {
        "id": "18ibqdggwutMIE6tjE15Icf_MA9vMY7mo",
        "name": "AVDM1971.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18ibqdggwutMIE6tjE15Icf_MA9vMY7mo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18ibqdggwutMIE6tjE15Icf_MA9vMY7mo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18ibqdggwutMIE6tjE15Icf_MA9vMY7mo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18ibqdggwutMIE6tjE15Icf_MA9vMY7mo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rtRzl86erRQL8o0PKIXwYuhAvvDnN686",
        "name": "AVDM1972.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rtRzl86erRQL8o0PKIXwYuhAvvDnN686=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rtRzl86erRQL8o0PKIXwYuhAvvDnN686=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rtRzl86erRQL8o0PKIXwYuhAvvDnN686=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rtRzl86erRQL8o0PKIXwYuhAvvDnN686",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26",
        "name": "AVDM1973.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PjC1FF8vZq_ic3Hv2MNMbTnpWwQuvj26",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O",
        "name": "AVDM1974.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fhU5WbgquqS1Ljdj_-WpAXuDzIfKFK8O",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f",
        "name": "AVDM1975.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-zFxaxi_VmEANALfywVL2paopuQ5Sr-f",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zcke07DlSWRWd-umWquYUVqRgCw7At5a",
        "name": "AVDM1976.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zcke07DlSWRWd-umWquYUVqRgCw7At5a=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zcke07DlSWRWd-umWquYUVqRgCw7At5a=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zcke07DlSWRWd-umWquYUVqRgCw7At5a=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zcke07DlSWRWd-umWquYUVqRgCw7At5a",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx",
        "name": "AVDM1977.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Mxp5lE8rocoPbPj3jb1KUIxIHGSbtAdx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A",
        "name": "AVDM1978.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SUh2AouFPwJkEMYT5TLBgDI1uEwOXE4A",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV",
        "name": "AVDM1979.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RR5xfvNfJObpjp3OMgNOaVqrZoaqbBCV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm",
        "name": "AVDM1980.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ykmsvvfCTDZqC6RBgkijg62oAkMwSRBm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA",
        "name": "AVDM1981.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K--6A_ehRyylD3eeB1-QYIKhD2YQZ8fA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq",
        "name": "AVDM1982.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iXtU7vAfpncP-Xq14xQIylK5SB4k-Daq",
        "aspectRatio": "3/2"
      },
      {
        "id": "16euyiGv9cjimrlFituY7bR6Ixza-IqZH",
        "name": "AVDM1983.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16euyiGv9cjimrlFituY7bR6Ixza-IqZH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16euyiGv9cjimrlFituY7bR6Ixza-IqZH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16euyiGv9cjimrlFituY7bR6Ixza-IqZH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16euyiGv9cjimrlFituY7bR6Ixza-IqZH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS",
        "name": "AVDM1984.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lrDXSwGTzPUKYAERZg0lbccqwlAOVmiS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO",
        "name": "AVDM1985.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1m9qdlzqLx2oxAKwvUE-aiFML93T4cssO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ",
        "name": "AVDM1986.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ON3xWFtytm43jYkbO3YBj0KH99X15PvQ",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1I7E0v4iP4eLTVBbt-mrokVFlT_OD-kBV",
    "slug": "day-08-10112026-tue-slot-163-0000-hrs-to-slot-186-2300-hrs",
    "name": "Day 08 - 10.11.2026 (Tue) | Slot 163 (00:00 Hrs) to Slot 186 (23:00 Hrs)",
    "shortTitle": "Day 08 - 10.11.2026 (Tue)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 08 - 10.11.2026 (Tue) | Slot 163 (00:00 Hrs) to Slot 186 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1I7E0v4iP4eLTVBbt-mrokVFlT_OD-kBV",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3",
      "name": "DSC_3316.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3",
        "name": "DSC_3316.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1T8YxuXqjjuUi8HivtKYinjWpPZ7D-Ck3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg",
        "name": "DSC_3318.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vjVg84NVdcI8hAWHGxcj9x2NRyDo8ymg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uj17TTmAimw7Rm03OWaze3asaPFQOhOG",
        "name": "DSC_3319.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uj17TTmAimw7Rm03OWaze3asaPFQOhOG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uj17TTmAimw7Rm03OWaze3asaPFQOhOG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uj17TTmAimw7Rm03OWaze3asaPFQOhOG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uj17TTmAimw7Rm03OWaze3asaPFQOhOG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj",
        "name": "DSC_3320.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tQZ8fyWtwWt9276Ys0l42R_8QV2p_qsj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2",
        "name": "DSC_3321.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gY7JVXCal8OIuCGbV9Gz9PtxSOll2VK2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_",
        "name": "DSC_3322.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LnuulrPac6k7iTUqb5fkhDqG5DCC6-d_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329",
        "name": "DSC_3323.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GBA7RTSdQuvwiEr_T7v6VYq5aEX9I329",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB",
        "name": "DSC_3325.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EfWzLYRgnWTrBX6Dqkw_ccavg90HTnOB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq",
        "name": "DSC_3326.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Yk5OvE4HAhbI16ZekhOQCjMrmPO62ehq",
        "aspectRatio": "3/2"
      },
      {
        "id": "14XddcK88uZyw69PoKltlxRCS8n7ozq1h",
        "name": "DSC_3327.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14XddcK88uZyw69PoKltlxRCS8n7ozq1h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14XddcK88uZyw69PoKltlxRCS8n7ozq1h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14XddcK88uZyw69PoKltlxRCS8n7ozq1h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14XddcK88uZyw69PoKltlxRCS8n7ozq1h",
        "aspectRatio": "3/2"
      },
      {
        "id": "12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM",
        "name": "DSC_3328.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12AJUMmKXrYmAbsm-DpXZTCnkvUJsbrMM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF",
        "name": "DSC_3329.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NeT2cCcImivu1N8Mgmd7jLlr__XWQKTF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc",
        "name": "DSC_3330.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v70AhgmF5c-OEUpkSjbDgyD_LAptVFpc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ubqaaH5eof_43afSrxejGNA_mNa39ZbS",
        "name": "DSC_3331.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ubqaaH5eof_43afSrxejGNA_mNa39ZbS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ubqaaH5eof_43afSrxejGNA_mNa39ZbS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ubqaaH5eof_43afSrxejGNA_mNa39ZbS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ubqaaH5eof_43afSrxejGNA_mNa39ZbS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw",
        "name": "DSC_3332.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NDBBmzJMZb8wAniX6tXYMQ767EPs-vgw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg",
        "name": "DSC_3333.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Se3oBTZ1X7KAU-rw7tOsd9f6rbumeuvg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK",
        "name": "DSC_3334.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZaDw58eBSkESf1CmCPxNmzybScgTGrmK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu",
        "name": "DSC_3335.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K0PzFx1doAIuKeLeKnV7vAu8o6LR70Yu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg",
        "name": "DSC_3336.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hOO63nMe0L6PyosbP6E9MeebVmzcMXZg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ot82khI210h--BaZH7Np-IaatpxLSQ5S",
        "name": "DSC_3337.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ot82khI210h--BaZH7Np-IaatpxLSQ5S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ot82khI210h--BaZH7Np-IaatpxLSQ5S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ot82khI210h--BaZH7Np-IaatpxLSQ5S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ot82khI210h--BaZH7Np-IaatpxLSQ5S",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh",
        "name": "DSC_3338.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tqxMFxIAlSGX2DSoPJiiEjzaZObMd7Jh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN",
        "name": "DSC_3339.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1voENWohyVJdxQPWNiXLQ1e53F3BnJFBN",
        "aspectRatio": "3/2"
      },
      {
        "id": "14hhERKSLrK2SQovQGhy1gQX1FaILy1KI",
        "name": "DSC_3340.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14hhERKSLrK2SQovQGhy1gQX1FaILy1KI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14hhERKSLrK2SQovQGhy1gQX1FaILy1KI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14hhERKSLrK2SQovQGhy1gQX1FaILy1KI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14hhERKSLrK2SQovQGhy1gQX1FaILy1KI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR",
        "name": "DSC_3341.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gk_hdDUk7XDZNoavqDWq3gEgHZU2oiFR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj",
        "name": "DSC_3342.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jHYCPKAfMYNg4_d7Bq98xS5NjIp4aFaj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d",
        "name": "DSC_3344.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ueDLzvfyx3CVtoE4jBq8g46aEOCGQJ6d",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-",
        "name": "DSC_3345.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D65LiFM_rwb2deoZHFjYGhz7S3yAAxv-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX",
        "name": "DSC_3346.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IAzKriK0etwnzPuMQLpaLBicbg8Oz1lX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4",
        "name": "DSC_3347.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pgzHSEU6qL1VV8UtwITMJvbWPOOQ_gN4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N",
        "name": "DSC_3348.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZaL1o99SfAf7ARzgs7uOrv2YI0EoJG4N",
        "aspectRatio": "3/2"
      },
      {
        "id": "127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj",
        "name": "DSC_3349.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=127Xgc2ouFEYW6-F47QYhVxxW-aa-jYuj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_",
        "name": "DSC_3350.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wl--Pgsk7NR1ZmKsda1ryQTbawfZOSm_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL",
        "name": "DSC_3351.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aawKHQ_MDo_Xbf89yvhtQ8lhpnMlgiJL",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U",
        "name": "DSC_3352.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n23iwQtjW9fn8o0wjwC-2leFPXbmDu2U",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00",
        "name": "DSC_3353.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z6RVqUT7WAZny7w0h6N1gDZzeliWUn00",
        "aspectRatio": "3/2"
      },
      {
        "id": "16YcM69oTf6O_3foyOiW_KeSs50NCdBXR",
        "name": "DSC_3354.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16YcM69oTf6O_3foyOiW_KeSs50NCdBXR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16YcM69oTf6O_3foyOiW_KeSs50NCdBXR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16YcM69oTf6O_3foyOiW_KeSs50NCdBXR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16YcM69oTf6O_3foyOiW_KeSs50NCdBXR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ",
        "name": "DSC_3355.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1b68YhitnksWA2N-dLdZkJnXrOUyacIkJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST",
        "name": "DSC_3356.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16GZZrOkcpdj_AfgXF98fFuSS5nm7i2ST",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u",
        "name": "DSC_3357.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_eBAKJdN8PS1S777b6sO_VUBz1Cn_q1u",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_",
        "name": "DSC_3358.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_sLDz-miSA0zA4DTlyM17fkvcCkMiIf_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq",
        "name": "DSC_3359.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1uf5X2tjIrkUVgNvmfXuugGEUrSctzuKq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm",
        "name": "DSC_3360.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rb1w2ISnfSGOOmb25J_LZkmIfW6595Sm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX",
        "name": "DSC_3361.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1qQ5hCLm8JNHZLZhUuMO7jHYQolxqA7JX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427",
        "name": "DSC_3362.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LmcXD_h-L_QJsXwd7V9nKp8VhTFZy427",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH",
        "name": "DSC_3363.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YLJFMxxf21BDukHjfOM3okNWPWBhGDJH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9",
        "name": "DSC_3364.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u1pC47SKmIpvbKWCxlXFK2whenkJa6M9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT",
        "name": "DSC_3365.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UuyP91UfAMtqQfK3VHo4HTiqCwwDXgTT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8",
        "name": "DSC_3366.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nNNIcE5IqHngNCiaFYldUxJNmL-GebX8",
        "aspectRatio": "3/2"
      },
      {
        "id": "14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB",
        "name": "DSC_3367.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14ZrPX_maWgXkokgaZQ6M7YRrTq0-gTgB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF",
        "name": "DSC_3368.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_s4hSsfS9GosXg7Zj-01Xn0eMspSTCIF",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1rHIQemeLpluBDytGIOnpfY7uZULDZ8_m",
    "slug": "day-09-11112026-wed-slot-187-0000-hrs-to-slot-210-2300-hrs",
    "name": "Day 09 - 11.11.2026 (Wed) | Slot 187 (00:00 Hrs) to Slot 210 (23:00 Hrs)",
    "shortTitle": "Day 09 - 11.11.2026 (Wed)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 09 - 11.11.2026 (Wed) | Slot 187 (00:00 Hrs) to Slot 210 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1rHIQemeLpluBDytGIOnpfY7uZULDZ8_m",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-",
      "name": "AVDM2329.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-",
        "name": "AVDM2329.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VLh9QCecz_tLPpMwqcU3GQ0VC5aQQH3-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb",
        "name": "AVDM2330.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TBAGVD3o4zDigzjBEWpCVJuXC8_P4XFb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI",
        "name": "AVDM2331.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-ZkVYMOjM6pvYj650ooSdizKofEXnhiI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF",
        "name": "AVDM2332.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1E_VT-AgcbRJLxOwlzllb36ZKot2PGrDF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt",
        "name": "AVDM2333.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NLa3aQ_bTktt_CdV5qAJxLNjlljIF2vt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO",
        "name": "AVDM2334.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xYvEsh_6EsMH2YIKfNpTOBAF1R8fqPaO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY",
        "name": "AVDM2335.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rdCPjqqgIXKni1dUzM0FVX2M1qSotGBY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur",
        "name": "AVDM2336.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1srkpkZMqtJ2mXZQGXYyfDDeMkxl3mgur",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS",
        "name": "AVDM2337.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xEtPuJCALfOKoCFRna6T3Hmg9cecIWNS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ",
        "name": "AVDM2338.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dJjB05BilO_kFaMnRaOIn4bIgpVFDrTQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7",
        "name": "AVDM2339.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jRhjJiOUpiHoR_gZPQdQXMJxb2y7_mB7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU",
        "name": "AVDM2340.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1H4KANIz9vBJq4c5C7b4E4dcKROX44DcU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK",
        "name": "AVDM2341.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KNtf4AXBftOlWEyZiwlU7TEefNg2eNZK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW",
        "name": "AVDM2342.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PTNFfHQp62SCCwAShBZSKA4k4cBkyHwW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0",
        "name": "AVDM2343.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LNqCt9VUtFBju5ZxM0D7N5648BVxMzI0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM",
        "name": "AVDM2344.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aiFTcxBNJmi7GdPoY_oHXFnk7XGGBcyM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD",
        "name": "AVDM2345.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KbAm4Pur89FrTJQCSg5geGvUEsh-BUvD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN",
        "name": "AVDM2346.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gdfsrjLcD7jejcGD2LBIgrPunFPllwfN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW",
        "name": "AVDM2347.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TwswWCTBndQtyw8IiWw2aGAksmrpyMPW",
        "aspectRatio": "3/2"
      },
      {
        "id": "158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS",
        "name": "AVDM2348.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=158MSe1Xy1zuFuW_sWJ2RcL1DSZGV5poS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi",
        "name": "AVDM2349.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HkiETEFPIqT2y4P8xjQM4osMN3IgNkxi",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP",
        "name": "AVDM2350.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QD2EPgvN-eTvS1wMjlPCQWmcAIp-LCIP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC",
        "name": "AVDM2351.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pU3Y19vjR89ykoueNb-CQK9XF3llCrqC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df",
        "name": "AVDM2352.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ho2kfB2CgDlisCRea_ef6JIuyBwUz1Df",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh",
        "name": "AVDM2353.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-0Mf91xOoY1Cfwk_edhmsIpwrns3fKMh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F",
        "name": "AVDM2354.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sMQoCjjZhhyygpFDrKljptF_wAcMtT-F",
        "aspectRatio": "3/2"
      },
      {
        "id": "10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ",
        "name": "AVDM2355.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10KNKhNQrPgGbOaLA57Nnm5ijlXt-8XZQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "181BZWzY4WXkV442jL2K5Skxmrmz567UK",
        "name": "AVDM2356.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/181BZWzY4WXkV442jL2K5Skxmrmz567UK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/181BZWzY4WXkV442jL2K5Skxmrmz567UK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/181BZWzY4WXkV442jL2K5Skxmrmz567UK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=181BZWzY4WXkV442jL2K5Skxmrmz567UK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Nu1tg8922CDfx6kBnetssX8WPQBOyd35",
        "name": "AVDM2357.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Nu1tg8922CDfx6kBnetssX8WPQBOyd35=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Nu1tg8922CDfx6kBnetssX8WPQBOyd35=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Nu1tg8922CDfx6kBnetssX8WPQBOyd35=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Nu1tg8922CDfx6kBnetssX8WPQBOyd35",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB",
        "name": "AVDM2358.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tv131vrxGDKQDlBLfZIXvSxeOn9pXSMB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry",
        "name": "AVDM2359.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iTjCjnpEil1ync2AZsC9zhBKt9NP6Wry",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ",
        "name": "AVDM2360.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xkj1cl20CO2IRsOzvAtOGBrCIM9vpfrZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1",
        "name": "AVDM2361.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BbBnratK-YI5PYJ0BHv2_A2hF24beWU1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP",
        "name": "AVDM2362.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lXrX-GdOTXXKsoO2UkpjrnF3n3pFtIhP",
        "aspectRatio": "3/2"
      },
      {
        "id": "18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg",
        "name": "AVDM2363.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18yCZaJe0yIUZT82guHyGPdeaeaTMHlsg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR",
        "name": "AVDM2364.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a0848yjhhcCGx5DnW8GbW6cXSwPohFvR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz",
        "name": "AVDM2365.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sce2SC6pB2hQ2-Pk_t0xHl1LAreS9YSz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1",
        "name": "AVDM2366.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KZ-S8UXc_aLnj9m2woxYMnq-UErMJoV1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ",
        "name": "AVDM2367.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lgiI00QfTFkenfMKWC79z2CP0Y4jMktZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl",
        "name": "AVDM2368.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-YRPqprdeq-T3DBHA9_WWASUYSHC0Zwl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm",
        "name": "AVDM2369.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1175dRexs-p95BkY8o7Ab9JLI4X_NJgmm",
        "aspectRatio": "3/2"
      },
      {
        "id": "12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD",
        "name": "AVDM2370.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12qHp_3BjdDC1oqISn5zMeZOpEy8etNJD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1",
        "name": "AVDM2371.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SIU2pf81UeBuGwOBxSu3sklNyT26FZf1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM",
        "name": "AVDM2372.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_-fLqWeM29RTOQyMQKt8EKvwHpdVOwXM",
        "aspectRatio": "3/2"
      },
      {
        "id": "15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy",
        "name": "AVDM2373.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15ecJ_PjxQwlPtC13YjtCfVHsjMvTSbcy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4",
        "name": "AVDM2374.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1q7JJg4DkZpgIf13ZR3f-aFl1nKpIdDI4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H",
        "name": "AVDM2375.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oymD5SWzUOmS0KOqpxXpm_MtDxA7Bf4H",
        "aspectRatio": "3/2"
      },
      {
        "id": "1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X",
        "name": "AVDM2376.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1aH3a15_yA8a-VEvNBVgmpfi0gyfhmX_X",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P",
        "name": "AVDM2377.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Rqelx86Yzu1I1aq396XVy7JflwQCX5_P",
        "aspectRatio": "3/2"
      },
      {
        "id": "1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l",
        "name": "AVDM2378.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1StAbhKrwhAxB2tf0Y1eRu8fsqx94fo_l",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1onVC0Hz3j5Yk0TiZx4PSfcUgPVQJiVhS",
    "slug": "day-10-12112026-thu-slot-211-0000-hrs-to-slot-234-2300-hrs",
    "name": "Day 10 - 12.11.2026 (Thu) | Slot 211 (00:00 Hrs) to Slot 234 (23:00 Hrs)",
    "shortTitle": "Day 10 - 12.11.2026 (Thu)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 10 - 12.11.2026 (Thu) | Slot 211 (00:00 Hrs) to Slot 234 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1onVC0Hz3j5Yk0TiZx4PSfcUgPVQJiVhS",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V",
      "name": "DSC_3572.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V",
        "name": "DSC_3572.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MVXFL5JNY2ru95oMM_x_WdXy_jKgTa4V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy",
        "name": "DSC_3573.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QKyU421zyrVd1iycMXhL8ZPWq0MaEqxy",
        "aspectRatio": "3/2"
      },
      {
        "id": "10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab",
        "name": "DSC_3574.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10GRLd5U1LTB3qYYQERzyO9gvWyh8YIab",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X",
        "name": "DSC_3579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yJAClJXKpiKa0Sj94w3RDybQ6-K9KT0X",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK",
        "name": "DSC_3580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Lmd7TjSNz-LuCcCjdcJPTK31kHSh_hQK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v",
        "name": "DSC_3581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dObTKI3U5ZO16zSG8HQ_AyL8WIV-Yc3v",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A",
        "name": "DSC_3582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gRaT38RA3Al_T7855SstkrJ8KDt-SO1A",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oCkOU5MTJJRZY1p7sur50k63yA0rznRw",
        "name": "DSC_3583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oCkOU5MTJJRZY1p7sur50k63yA0rznRw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oCkOU5MTJJRZY1p7sur50k63yA0rznRw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oCkOU5MTJJRZY1p7sur50k63yA0rznRw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oCkOU5MTJJRZY1p7sur50k63yA0rznRw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR",
        "name": "DSC_3584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1u8kmYzG-D6_u5OzYUAq0cMd3qEcr7txR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_Zchy8ioszVIyexnsTJd61Q13ilheOGD",
        "name": "DSC_3585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_Zchy8ioszVIyexnsTJd61Q13ilheOGD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_Zchy8ioszVIyexnsTJd61Q13ilheOGD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_Zchy8ioszVIyexnsTJd61Q13ilheOGD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_Zchy8ioszVIyexnsTJd61Q13ilheOGD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IsktcZbVnV6t54NEVu611EwUsttkBpIM",
        "name": "DSC_3586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IsktcZbVnV6t54NEVu611EwUsttkBpIM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IsktcZbVnV6t54NEVu611EwUsttkBpIM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IsktcZbVnV6t54NEVu611EwUsttkBpIM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IsktcZbVnV6t54NEVu611EwUsttkBpIM",
        "aspectRatio": "3/2"
      },
      {
        "id": "10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7",
        "name": "DSC_3587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10qHQXXijPvcEzIVxpAYtrUV3Pz9lRQr7",
        "aspectRatio": "3/2"
      },
      {
        "id": "14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB",
        "name": "DSC_3588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14UK3DN4rnHvNSbivuAYcItlLWGy4_NcB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF",
        "name": "DSC_3589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1j35-yV2NynFPj4HOwYihVhG-ZlaNOYnF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF",
        "name": "DSC_3590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BdoL47XoLlAqlcXHRLw7fpka6LuoynOF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4",
        "name": "DSC_3591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1euXU6XD5JQJ2QSw62o3H08ErmA6W7Ge4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV",
        "name": "DSC_3592.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fxs8s05zBNVC5QlHOlheNGKj6WQfOLiV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ",
        "name": "DSC_3593.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sjSsd_xJFCkecA7q_ZZclqoNmG65hyqZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ",
        "name": "DSC_3594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kcNotwEPM1MesnKX8jrH-gH3T60hKYUQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc",
        "name": "DSC_3595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Bu9Rze4RI2lrwoZXDjWWpk8VRogbPbOc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf",
        "name": "DSC_3596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dndzFpqYIMmSnwcBpV2V6MHi-e0hWJJf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM",
        "name": "DSC_3599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AqZyualwTpBFgoLMUg3YIj38KcLBYnVM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7",
        "name": "DSC_3600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1owrDsRCg0N1thJOh0tEJP_nEw-es3NM7",
        "aspectRatio": "3/2"
      },
      {
        "id": "17YtQcamLATiEGgLrHiXsYCNIouPokxlj",
        "name": "DSC_3601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17YtQcamLATiEGgLrHiXsYCNIouPokxlj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17YtQcamLATiEGgLrHiXsYCNIouPokxlj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17YtQcamLATiEGgLrHiXsYCNIouPokxlj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17YtQcamLATiEGgLrHiXsYCNIouPokxlj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh",
        "name": "DSC_3602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QFv2wZtx6RrnyPtefkr1ZJqhRW6Kbweh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ",
        "name": "DSC_3603.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1jtcMLA3yAX1SQ3JY8YKVvsgKLrLgv9LQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ",
        "name": "DSC_3604.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F8S59xu4j2PZ_FQkkrI-Q9exy1KX43oQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM",
        "name": "DSC_3606.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nMsJYFDCIO2WBJ4w9mpQn8BwRO_30VAM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU",
        "name": "DSC_3607.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mnoWlkSVRyMx_fuHZjxDK2_Mg7ClX2jU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb",
        "name": "DSC_3608.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Rys5TluPnWK7g7zH_rXte2Be7OAu68Wb",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw",
        "name": "DSC_3609.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QcsZxolm5aCkgUnjw659qh3ujZbEBdIw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S",
        "name": "DSC_3610.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pP6DW-NLgU4wjONPeHJYzOqQmkv9c94S",
        "aspectRatio": "3/2"
      },
      {
        "id": "10lQhleWGl6-BdEP465WVT_SrSpUs3OQn",
        "name": "DSC_3611.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10lQhleWGl6-BdEP465WVT_SrSpUs3OQn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10lQhleWGl6-BdEP465WVT_SrSpUs3OQn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10lQhleWGl6-BdEP465WVT_SrSpUs3OQn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10lQhleWGl6-BdEP465WVT_SrSpUs3OQn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc",
        "name": "DSC_3612.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yOkawjKCaVIeSuEJh4skCmDloGSX5iLc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn",
        "name": "DSC_3613.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1scg4GgUF8P3V6lxh4WM21ZeVJbKVb-Fn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv",
        "name": "DSC_3614.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yR6nbrWf85hykiggdF0OsS0UkWLZSAiv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Gpazi6X1FvOxl4knnQd481klvXDxAsN1",
        "name": "DSC_3615.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Gpazi6X1FvOxl4knnQd481klvXDxAsN1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Gpazi6X1FvOxl4knnQd481klvXDxAsN1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Gpazi6X1FvOxl4knnQd481klvXDxAsN1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Gpazi6X1FvOxl4knnQd481klvXDxAsN1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IKS5rDz1q96nGoNO5Den-A26U96_lU_1",
        "name": "DSC_3616.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IKS5rDz1q96nGoNO5Den-A26U96_lU_1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IKS5rDz1q96nGoNO5Den-A26U96_lU_1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IKS5rDz1q96nGoNO5Den-A26U96_lU_1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IKS5rDz1q96nGoNO5Den-A26U96_lU_1",
        "aspectRatio": "3/2"
      },
      {
        "id": "156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo",
        "name": "DSC_3617.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=156xr_WOpwQQ_Tp9R5gy-cP2zAfnu2Udo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1n2t0adVKdmcJG-si-60CbKccU01-ALat",
        "name": "DSC_3618.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n2t0adVKdmcJG-si-60CbKccU01-ALat=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1n2t0adVKdmcJG-si-60CbKccU01-ALat=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n2t0adVKdmcJG-si-60CbKccU01-ALat=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1n2t0adVKdmcJG-si-60CbKccU01-ALat",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3",
        "name": "DSC_3619.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JrNpNUxLa4kzA-D2ecYODFR9hrTrRyV3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv",
        "name": "DSC_3624.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YLTEO6aDFEHn4CCrQnWqaYGHunX6AEVv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5",
        "name": "DSC_3625.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RnmEIiKZot1RiV9GaNlsIBTEdzUdBre5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-",
        "name": "DSC_3626.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zIXZfYnZYP24yeb7QQFjpJRmyjOO2sG-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS",
        "name": "DSC_3627.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PQ8c_YOlIR7d6V6piifeEe9nc7I-xZlS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h",
        "name": "DSC_3628.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1iJYnAGT3I3lP0B72sNrBAqzhEfnIse6h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3",
        "name": "DSC_3629.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y1xFgWu2v950HT0eCAUDhFuO2_AIboy3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh",
        "name": "DSC_3630.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1TaYyRjySWJhAnSF7lfyTyChqNUSkGHlh",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG",
        "name": "DSC_3631.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gdOOZeAhhqs9SBR3lAAGtmq1QHjoaeBG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK",
        "name": "DSC_3632.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1t882AvHZwFmArm7jPJnCKbiBBq1MnvSK",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1pLipdxcdo69SmNalZzZcqjHhtLrW8ufO",
    "slug": "day-11-13112026-fri-slot-235-0000-hrs-to-slot-258-2300-hrs",
    "name": "Day 11 - 13.11.2026 (Fri) | Slot 235 (00:00 Hrs) to Slot 258 (23:00 Hrs)",
    "shortTitle": "Day 11 - 13.11.2026 (Fri)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 11 - 13.11.2026 (Fri) | Slot 235 (00:00 Hrs) to Slot 258 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1pLipdxcdo69SmNalZzZcqjHhtLrW8ufO",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1gvCFj752p8Alf3pV6lKT1dH8PNihU22m",
      "name": "AVDM0001.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1gvCFj752p8Alf3pV6lKT1dH8PNihU22m",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1gvCFj752p8Alf3pV6lKT1dH8PNihU22m",
        "name": "AVDM0001.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gvCFj752p8Alf3pV6lKT1dH8PNihU22m=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gvCFj752p8Alf3pV6lKT1dH8PNihU22m",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5",
        "name": "AVDM0002.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BL9QQ7q2xDx4iznga6drN7GYVwRt-mu5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI",
        "name": "AVDM0003.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1l-AOXm99lOidvAEmrrg4QKspQJZbCNzI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b",
        "name": "AVDM0004.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hi7iFLl9RpDQdCMdenjLh2jkXZaHLj3b",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU",
        "name": "AVDM0006.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eDimr5dODbSLFF7rIzcqTi5NDX-3YyXU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd",
        "name": "AVDM0007.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gtPnh5GZb_U-SSmFZwdFrIGEbNEzTNFd",
        "aspectRatio": "3/2"
      },
      {
        "id": "1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX",
        "name": "AVDM0008.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1X2PkE3QCAa1Zrfovjy6o1SIAFSxRcGQX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc",
        "name": "AVDM0009.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1r0brruEtlzaszUIiZDkMBhAm4wSn76Jc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx",
        "name": "AVDM0010.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1B-x7Wi7oheqfflDQryxUZpv-r8MVz2Yx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6",
        "name": "AVDM0011.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LbXRnbHEJPL4MKWqsHITBEJdE946OwH6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU",
        "name": "AVDM0012.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1y0CXUoCNMZThv6X0deFcwPVuFvdFTAwU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp",
        "name": "AVDM0013.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W9pvGwuHlMb4UNe52FB6q49Tn1PDiTLp",
        "aspectRatio": "3/2"
      },
      {
        "id": "13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK",
        "name": "AVDM0014.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13jpSN05P3Bq_x8R0SrkvUVmjzaCl-uPK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC",
        "name": "AVDM0015.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eqN8J3mDKItk0s6YvfxsPmvoCZInWIZC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L",
        "name": "AVDM0016.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sug-TjvOuwPLU2AkrHEVrcTUcTaIyM1L",
        "aspectRatio": "3/2"
      },
      {
        "id": "1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c",
        "name": "AVDM0017.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1K3YtgodMsR2EYfJgqfkU7Sm6RMSIfI3c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu",
        "name": "AVDM0018.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Fiu9jTbT53nt70YHpm1d1NezOoyZK3Xu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g",
        "name": "AVDM0019.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1eAWQ1YmzspRgqbJ_fq_eAmIo1fZol31g",
        "aspectRatio": "3/2"
      },
      {
        "id": "14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy",
        "name": "AVDM0020.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14qkfZvmkYXjTxtjQE8tBGvLdazIrpasy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO",
        "name": "AVDM0021.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xo5a_nT6mUL_qXAFhapywB9J5jCq77EO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz",
        "name": "AVDM0022.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zz76oQdV1rkj5tcUk266jc2YXx_RT0fz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF",
        "name": "AVDM0023.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p6MAr8skzz-O1ZL-hmFnzgaOFQMAxFmF",
        "aspectRatio": "3/2"
      },
      {
        "id": "19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN",
        "name": "AVDM0024.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19saLJWxtGgx5hp0BnjKAIKv2-i9itNXN",
        "aspectRatio": "3/2"
      },
      {
        "id": "1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq",
        "name": "AVDM0025.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1OiE4e-I-tpWJ73IaB7Rx9WWp5LwwE0Vq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl",
        "name": "AVDM0026.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HvYS8Awpro3qSFHuhlXuoiktxcBULbCl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK",
        "name": "AVDM0027.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1135RJl5UT5IdWW5rTBvD2pySeKWHn7UK",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO",
        "name": "AVDM0028.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sGKheVuFpNQk_Hxjdw5S5rWEe5u847pO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm",
        "name": "AVDM0029.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tRuLjrdBEWNr0PXmJsKh2FJHaWzFZ2nm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo",
        "name": "AVDM0030.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pzFlbVLwMjKDOn5OdEudlxdyAy8TyAlo",
        "aspectRatio": "3/2"
      },
      {
        "id": "16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i",
        "name": "AVDM0031.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16Mxs-X6YPeo14PCymiEYYePlFUzBx_3i",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9",
        "name": "AVDM0032.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rYtPr9H21tw1iunDBd5CU7m_zp6wvXN9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy",
        "name": "AVDM0033.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dpd6M5KiczkBCtkb6fUSvzTCoTFpn6iy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-",
        "name": "AVDM0034.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KnfXmvkFaXp6FPrkdMJ6zC3b_7s2bRk-",
        "aspectRatio": "3/2"
      },
      {
        "id": "14cTCIQa73eEEdLmBxORaUTEg1saU0KxP",
        "name": "AVDM0035.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14cTCIQa73eEEdLmBxORaUTEg1saU0KxP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14cTCIQa73eEEdLmBxORaUTEg1saU0KxP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14cTCIQa73eEEdLmBxORaUTEg1saU0KxP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14cTCIQa73eEEdLmBxORaUTEg1saU0KxP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl",
        "name": "AVDM0036.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ksy9EriBY8rPd4_iCNgI6E5ZjnzyCxYl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V",
        "name": "AVDM0037.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RHNJr1dhzkbv1Do6uNwn7Avelkq-7J5V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2",
        "name": "AVDM0038.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SA9DHKjV9Degu9DHYn90ffmH_RQ4qUz2",
        "aspectRatio": "3/2"
      },
      {
        "id": "12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq",
        "name": "AVDM0039.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12iFsJ0R_Xb9Js0BA9QIHp9T77WPL7IDq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij",
        "name": "AVDM0040.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GosyB8PPArMSWmcTbDW_GFZwz4dMLiij",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y",
        "name": "AVDM0041.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oCy-bzBNT1DN_1N5N3l1g1H8M6O7sE3y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY",
        "name": "AVDM0042.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VApD5Qwdd9XKo187KuK1yrVDYJXrfNMY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer",
        "name": "AVDM0043.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FEPtHByevYc-rH_MW_d5gOzC5Pe1ETer",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf",
        "name": "AVDM0044.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pyK7Q9Bf2GJVkDVHROEH5qN9AgsgivRf",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c",
        "name": "AVDM0045.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wE9K4sxl6gXh9x9b-2vPk7JHI_Mx2M_c",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x",
        "name": "AVDM0046.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MBx4sKi3mRtigkS6s1h2R9Lt5tTTcl5x",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW",
        "name": "AVDM0047.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZiSKVu-X0R0JUaU_3p8Hj4TzXnIts_XW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO",
        "name": "AVDM0048.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bfA-rOo7ShQIA9L49VeuT0gxq9G9UyMO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A",
        "name": "AVDM0049.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GOWEYm2dw7u761kFvHK6zPPnLjfpVH8A",
        "aspectRatio": "3/2"
      },
      {
        "id": "170WEmJpWuILQlKORGCELQ7znKmpGsXXR",
        "name": "AVDM0050.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/170WEmJpWuILQlKORGCELQ7znKmpGsXXR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/170WEmJpWuILQlKORGCELQ7znKmpGsXXR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/170WEmJpWuILQlKORGCELQ7znKmpGsXXR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=170WEmJpWuILQlKORGCELQ7znKmpGsXXR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw",
        "name": "AVDM0051.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D1bi-F4IKY15wwO-tA8Wxji-XTI_5btw",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1gzsvmvHyaJA-ptQJPbDQ3nYeWfpB58Gk",
    "slug": "day-12-14112026-sat-slot-259-0000-hrs-to-slot-282-2300-hrs",
    "name": "Day 12 - 14.11.2026 (Sat) | Slot 259 (00:00 Hrs) to Slot 282 (23:00 Hrs)",
    "shortTitle": "Day 12 - 14.11.2026 (Sat)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 12 - 14.11.2026 (Sat) | Slot 259 (00:00 Hrs) to Slot 282 (23:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1gzsvmvHyaJA-ptQJPbDQ3nYeWfpB58Gk",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g",
      "name": "AVDM0578.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g",
        "name": "AVDM0578.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kFSGfpE-McX0bUUymqFBgZJKh24Fx14g",
        "aspectRatio": "3/2"
      },
      {
        "id": "13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n",
        "name": "AVDM0578.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13kYeGLlqXsgH2_jwmkA-wL5vxE_8rI9n",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_",
        "name": "AVDM0579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vYFvuOWXxVxqooYRVtTD0-Lj6AJO2OI_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE",
        "name": "AVDM0579.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1nVvGMN_6TqfC82JzdrOD7M3SPIHPmUjE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1J2eI47jZVFSwVBraktGe0DROmB6tyltg",
        "name": "AVDM0580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1J2eI47jZVFSwVBraktGe0DROmB6tyltg=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1J2eI47jZVFSwVBraktGe0DROmB6tyltg=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1J2eI47jZVFSwVBraktGe0DROmB6tyltg=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1J2eI47jZVFSwVBraktGe0DROmB6tyltg",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz",
        "name": "AVDM0580.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zya2JL6ss4LE1hiodeyfD3vgz0YaafRz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur",
        "name": "AVDM0581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Vq1yB5Z6uzFyTwaSvjs43R2d2PHaT4ur",
        "aspectRatio": "3/2"
      },
      {
        "id": "17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-",
        "name": "AVDM0581.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17-7_Uo4unQV3HTROs1jh0oT3pEocCyJ-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR",
        "name": "AVDM0582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NEpKV2gVlwHX52KdVZ9_RR6hImAVdaGR",
        "aspectRatio": "3/2"
      },
      {
        "id": "15JYvJNghnUm3M6AahS_qlOpuO7deLLKT",
        "name": "AVDM0582.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15JYvJNghnUm3M6AahS_qlOpuO7deLLKT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15JYvJNghnUm3M6AahS_qlOpuO7deLLKT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15JYvJNghnUm3M6AahS_qlOpuO7deLLKT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15JYvJNghnUm3M6AahS_qlOpuO7deLLKT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX",
        "name": "AVDM0583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1D8B-H1wCk0kHesWFwJaK3oTGULrCvSeX",
        "aspectRatio": "3/2"
      },
      {
        "id": "12UicZ32kllImbV6haWzIjwKhVZVbNa4A",
        "name": "AVDM0583.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12UicZ32kllImbV6haWzIjwKhVZVbNa4A=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12UicZ32kllImbV6haWzIjwKhVZVbNa4A=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12UicZ32kllImbV6haWzIjwKhVZVbNa4A=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12UicZ32kllImbV6haWzIjwKhVZVbNa4A",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG",
        "name": "AVDM0584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wJpeBCoZku4JOlHNtdJotQ-SQVjAPiyG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP",
        "name": "AVDM0584.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1j08xch4tC7iAkOvu-4K3jnjt0dgdZysP",
        "aspectRatio": "3/2"
      },
      {
        "id": "16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln",
        "name": "AVDM0585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16BM1M6-N8JbcMa_wPSV1cSV8KPrUF3Ln",
        "aspectRatio": "3/2"
      },
      {
        "id": "1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW",
        "name": "AVDM0585.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1COAn2mFzyMv0NKyPjbnJ4RQj06J95qUW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK",
        "name": "AVDM0586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RgS7IIxZNJCjSSQLg7A1niT3TCXGfwUK",
        "aspectRatio": "3/2"
      },
      {
        "id": "17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy",
        "name": "AVDM0586.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17y1IsgP-IvUrAyEw3wFJ3VVyoE6mwBwy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz",
        "name": "AVDM0587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1e7JPMEDzMzaZrlyRbxlRGaCMS7joAXjz",
        "aspectRatio": "3/2"
      },
      {
        "id": "106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s",
        "name": "AVDM0587.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=106LSML8dXQlQLlQ5jE0JmzrixNvMaB-s",
        "aspectRatio": "3/2"
      },
      {
        "id": "1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID",
        "name": "AVDM0588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1KT5ArwLOlSQ5ualK9II6bl9TdRcf7xID",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO",
        "name": "AVDM0588.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Gcep2oxAAQgzZ4LBYz1oIRBTIgrACXzO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB",
        "name": "AVDM0589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1hzkx_K6OceWL7y7v9KF9JY-PL_Y_LKlB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX",
        "name": "AVDM0589.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MYI9g3xmGHoHbUZGzqAsQDi6fsAW7OxX",
        "aspectRatio": "3/2"
      },
      {
        "id": "17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM",
        "name": "AVDM0590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17HuGdEJ0QQQ2ankKwuGsvQHXYkaQ9RJM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq",
        "name": "AVDM0590.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gAORFMsUqEA-Ekse75lc8YCNJ1SFMmUq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB",
        "name": "AVDM0591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Iior_oIv4EUBkOkeyZrDqYtvhKCxKwNB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO",
        "name": "AVDM0591.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1L0Uq4VRcEocwBxqLu-TtuYtaIOOR1nAO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa",
        "name": "AVDM0592.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z70rq0SC2JudSqOYu6dyPCQMiSuAZNfa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G",
        "name": "AVDM0592.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cO57bs6DUZicmmyffzTyJHFXDc5Y9c2G",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2",
        "name": "AVDM0593.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-u-2QQEQxiwx_HhzCTzm67NSOvPi1Un2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA",
        "name": "AVDM0593.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sxBxuFYuwL_18xqcj9WLk1i-_QUeMWAA",
        "aspectRatio": "3/2"
      },
      {
        "id": "1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s",
        "name": "AVDM0594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1IeuqDXnnEB6QbBRrE7k3tJHT6NmRkh4s",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm",
        "name": "AVDM0594.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wZyyvzqhGgyr7bbUHQUDbZZ3iYzJHXCm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD",
        "name": "AVDM0595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yYVmJMp0SrY2j-cAVlX2rifBBhBvSdWD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj",
        "name": "AVDM0595.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wwOeA4cv0SLu7NWMWZbrRWBxPGWiF1Wj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv",
        "name": "AVDM0596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kTfqEXbWTMnJ_a8hdxyxS_4EnRVwy9tv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr",
        "name": "AVDM0596.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cSXy-MCieQ9HYJWDDLHXaC-D6xMaIOQr",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wb16dABabUsqbIE--FoXP4zPcjJandl3",
        "name": "AVDM0597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wb16dABabUsqbIE--FoXP4zPcjJandl3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wb16dABabUsqbIE--FoXP4zPcjJandl3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wb16dABabUsqbIE--FoXP4zPcjJandl3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wb16dABabUsqbIE--FoXP4zPcjJandl3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu",
        "name": "AVDM0597.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_UxksMX9y6jj-kIJjpr_QMgzHpK_iKRu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB",
        "name": "AVDM0598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EfL5pRolQFFUK9r3px6YEP31HKGLn0xB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-",
        "name": "AVDM0598.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1a6Fd1P4IKbA9frtxJ1BnRmdIXIocTLS-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta",
        "name": "AVDM0599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZPe5-4wjeWeOYA8Qwzofc9GeZ4lrlMta",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9",
        "name": "AVDM0599.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ied7OBk3R-RlgbkeGPsO_uPXctxrjTZ9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B",
        "name": "AVDM0600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1U68vw9XGCzE7e8UNLTCnfJTcwXHxqD2B",
        "aspectRatio": "3/2"
      },
      {
        "id": "19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6",
        "name": "AVDM0600.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19fvfR5L7ygJT5_NqgzdVgskzih1hmZj6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FexukqOW07-Ng0EURywcJS6GuXb9eARt",
        "name": "AVDM0601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FexukqOW07-Ng0EURywcJS6GuXb9eARt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FexukqOW07-Ng0EURywcJS6GuXb9eARt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FexukqOW07-Ng0EURywcJS6GuXb9eARt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FexukqOW07-Ng0EURywcJS6GuXb9eARt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er",
        "name": "AVDM0601.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sBKiD-UG8dKCSDxiTYavHauujcQEb_Er",
        "aspectRatio": "3/2"
      },
      {
        "id": "1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx",
        "name": "AVDM0602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1AjZdFIJjBc7hYo7v7wDmuGVy16LMpzQx",
        "aspectRatio": "3/2"
      },
      {
        "id": "14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp",
        "name": "AVDM0602.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14N5b2cvrsK0IvNfo2jYhHn4Cfuq1k_Bp",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1ghXI4naB2FxnSM0B2QO6ZXjheeNP03qZ",
    "slug": "day-13-15112026-sun-slot-283-0000-hrs-to-slot-300-1700-hrs",
    "name": "Day 13 - 15.11.2026 (Sun) | Slot 283 (00:00 Hrs) to Slot 300 (17:00 Hrs)",
    "shortTitle": "Day 13 - 15.11.2026 (Sun)",
    "category": "Guinness World Records Singing Marathon",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Day 13 - 15.11.2026 (Sun) | Slot 283 (00:00 Hrs) to Slot 300 (17:00 Hrs) under Guinness World Records Singing Marathon (Day 01 to Day 13).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1ghXI4naB2FxnSM0B2QO6ZXjheeNP03qZ",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu",
      "name": "AVDM1019.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu",
        "name": "AVDM1019.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1HhG3i_kWrroq_H-SaNvUQ-UE8RpH0iQu",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD",
        "name": "AVDM1020.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rc6lsAzEKPtpqJ2FTci2JHSyy4zrFqWD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1E6KS__lIyINZHozae52sZ4DUKqJB9CV-",
        "name": "AVDM1021.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1E6KS__lIyINZHozae52sZ4DUKqJB9CV-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1E6KS__lIyINZHozae52sZ4DUKqJB9CV-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1E6KS__lIyINZHozae52sZ4DUKqJB9CV-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1E6KS__lIyINZHozae52sZ4DUKqJB9CV-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE",
        "name": "AVDM1023.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wlHyFEnHK1zj7VvSDtjSprPwyMHsZzVE",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw",
        "name": "AVDM1024.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZOt4NyiN6FNcePjA9_HVdtSvgtCPILEw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sjwlYKPKjFejZByldD0OBna3paYrMd4R",
        "name": "AVDM1025.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sjwlYKPKjFejZByldD0OBna3paYrMd4R=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sjwlYKPKjFejZByldD0OBna3paYrMd4R=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sjwlYKPKjFejZByldD0OBna3paYrMd4R=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sjwlYKPKjFejZByldD0OBna3paYrMd4R",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB",
        "name": "AVDM1026.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lX8miZeym5Lgi76dW6nCNKr_-rU20bwB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt",
        "name": "AVDM1027.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-zLDEsEo4c1uyH7YoZ21qcHEFXjTDREt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv",
        "name": "AVDM1028.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JZ12jgzY_7H-XCYMkx7kEm2J2D0JRbzv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sHulYzva8C-KhewfMWYUTLS9JFJKcIty",
        "name": "AVDM1029.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sHulYzva8C-KhewfMWYUTLS9JFJKcIty=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sHulYzva8C-KhewfMWYUTLS9JFJKcIty=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sHulYzva8C-KhewfMWYUTLS9JFJKcIty=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sHulYzva8C-KhewfMWYUTLS9JFJKcIty",
        "aspectRatio": "3/2"
      },
      {
        "id": "1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ",
        "name": "AVDM1030.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1prRLunp_Y470nlWLn89Zv5CS1TS19TJZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DAeNegcCFhSGag61mExLeInzWBfHpAbu",
        "name": "AVDM1031.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DAeNegcCFhSGag61mExLeInzWBfHpAbu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DAeNegcCFhSGag61mExLeInzWBfHpAbu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DAeNegcCFhSGag61mExLeInzWBfHpAbu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DAeNegcCFhSGag61mExLeInzWBfHpAbu",
        "aspectRatio": "3/2"
      },
      {
        "id": "17HBN7dzTccREnpCzL36sJo51S6-4eI9g",
        "name": "AVDM1032.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17HBN7dzTccREnpCzL36sJo51S6-4eI9g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17HBN7dzTccREnpCzL36sJo51S6-4eI9g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17HBN7dzTccREnpCzL36sJo51S6-4eI9g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17HBN7dzTccREnpCzL36sJo51S6-4eI9g",
        "aspectRatio": "3/2"
      },
      {
        "id": "1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6",
        "name": "AVDM1033.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1fZIwwXNkSMizgIsyEi5jG8DkrAYiIMk6",
        "aspectRatio": "3/2"
      },
      {
        "id": "117GkA6zmjE_XT1XHON2gPfrSS4eAINXB",
        "name": "AVDM1034.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/117GkA6zmjE_XT1XHON2gPfrSS4eAINXB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/117GkA6zmjE_XT1XHON2gPfrSS4eAINXB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/117GkA6zmjE_XT1XHON2gPfrSS4eAINXB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=117GkA6zmjE_XT1XHON2gPfrSS4eAINXB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW",
        "name": "AVDM1035.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sV3Qeav4ppWugNQXAgVMpAvfhmVEXXIW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-",
        "name": "AVDM1036.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1wT5KmgfA-skj9oyKTyojuOMJM7Mpdcn-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC",
        "name": "AVDM1037.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Tot_rFHrzYL7kWXOjnxdPz2Wq7lYQjxC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt",
        "name": "AVDM1038.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QX6eiBOU394ph2ZLSisI9-G-mpLDdCUt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz",
        "name": "AVDM1039.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1O_DIIfjiscXv3tQPLtz7SR-bdXiFP9oz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS",
        "name": "AVDM1040.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1VFsu3w88MpoA7G4k0_4uBirp-yf6fMsS",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ",
        "name": "AVDM1041.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DBoISpYI0dpS6Zps5Vr5WRau9OhzJkGJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3",
        "name": "AVDM1042.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c6sU3LssQYaXrbjjwaWs0Th54BE6CPc3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs",
        "name": "AVDM1043.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1f-y0O05-yQ1JBlO5kXF2nrRFaXOK1_cs",
        "aspectRatio": "3/2"
      },
      {
        "id": "1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7",
        "name": "AVDM1044.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1G-hzmtF3EoPJ8-df5gghkNklcymuM2c7",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo",
        "name": "AVDM1045.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dn_OjGYQNZndS9L8Q7qFZZZrQVkK0UVo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1",
        "name": "AVDM1046.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y8SK-QIP7fMR71jFcH_9Mw1OIk-gUUI1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K",
        "name": "AVDM1047.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1PwJM9BjXgvULVLusfZ5pSrDX4eSyq1_K",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4",
        "name": "AVDM1048.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xRGH3rTfESaYdZlmXhdpMSsyiaW78bg4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h",
        "name": "AVDM1049.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ARWFSDCPTNRfYrLqMsMIdU4Ka6m1Fv_h",
        "aspectRatio": "3/2"
      },
      {
        "id": "1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND",
        "name": "AVDM1051.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1FE1bQzq1ihBcSj7Tu4esQmBA-cxf3aND",
        "aspectRatio": "3/2"
      },
      {
        "id": "17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm",
        "name": "AVDM1052.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17jRSmaFGUnhrFaGBq-KkYcn8vV-RWRUm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx",
        "name": "AVDM1053.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1c6vBadJA3aZsUG4ZocWpaSnBgftjZ7sx",
        "aspectRatio": "3/2"
      },
      {
        "id": "1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV",
        "name": "AVDM1054.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p-vK9b0xMgIj5q0zXNyoB_VicZ3v9nWV",
        "aspectRatio": "3/2"
      },
      {
        "id": "14atpQimnLYRbOBhmbH15yoXi-zPDVLdM",
        "name": "AVDM1055.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14atpQimnLYRbOBhmbH15yoXi-zPDVLdM=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14atpQimnLYRbOBhmbH15yoXi-zPDVLdM=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14atpQimnLYRbOBhmbH15yoXi-zPDVLdM=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14atpQimnLYRbOBhmbH15yoXi-zPDVLdM",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC",
        "name": "AVDM1056.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rHSCUZpigTAskapkd7BF_TALMMSJ1OcC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw",
        "name": "AVDM1057.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JEE4Wmppq9UTkeimwWH8Vw9mpJwB26Mw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX",
        "name": "AVDM1058.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1npnVeYRw5Vqj7C3MIHCF-GzR2wmCT1gX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_",
        "name": "AVDM1059.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YbxvD9dQ8JxVWhoyZeNfcOfqXLKCBaJ_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC",
        "name": "AVDM1060.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1k7w16jY5RF5Xo73ieZZM2ycP_HaxCsVC",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv",
        "name": "AVDM1061.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DaCGlsZypUdJX_Ag-hm2yUuXDOOeEoCv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9",
        "name": "AVDM1062.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1BOIF7Xid6JCH-EkdLycx7b9h6vjSCKe9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb",
        "name": "AVDM1063.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bHZi-4nCUKY5zDs1aJwi2fZnKKbSk9bb",
        "aspectRatio": "3/2"
      },
      {
        "id": "16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo",
        "name": "AVDM1064.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16BXZs2lQoNjb7XyWeCxjXQtSH7-IInmo",
        "aspectRatio": "3/2"
      },
      {
        "id": "1426De4GlNW-Tm7sesZBx074t4XIpAm0V",
        "name": "AVDM1065.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1426De4GlNW-Tm7sesZBx074t4XIpAm0V=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1426De4GlNW-Tm7sesZBx074t4XIpAm0V=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1426De4GlNW-Tm7sesZBx074t4XIpAm0V=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1426De4GlNW-Tm7sesZBx074t4XIpAm0V",
        "aspectRatio": "3/2"
      },
      {
        "id": "1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23",
        "name": "AVDM1066.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1b21Tx7DXho5cQsoQLUxzMPb-PFUKCZ23",
        "aspectRatio": "3/2"
      },
      {
        "id": "1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W",
        "name": "AVDM1067.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1itqM1xYjSbCv_sXBzdrfiMqBqFFnW_4W",
        "aspectRatio": "3/2"
      },
      {
        "id": "10KimsczE5GQqWA1rBsebdKcwAYUhRhR4",
        "name": "AVDM1068.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10KimsczE5GQqWA1rBsebdKcwAYUhRhR4=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10KimsczE5GQqWA1rBsebdKcwAYUhRhR4=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10KimsczE5GQqWA1rBsebdKcwAYUhRhR4=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10KimsczE5GQqWA1rBsebdKcwAYUhRhR4",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp",
        "name": "AVDM1069.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dzahZdEtL2BrXYQv5Fl84xKCNt_3jJJp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z_n9iBuovT71T-VsistT3uVUdWH5nAVV",
        "name": "AVDM1070.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z_n9iBuovT71T-VsistT3uVUdWH5nAVV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z_n9iBuovT71T-VsistT3uVUdWH5nAVV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z_n9iBuovT71T-VsistT3uVUdWH5nAVV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z_n9iBuovT71T-VsistT3uVUdWH5nAVV",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1zdqmHag7WGj10Q1_BF0oncynIkPmZtCC",
    "parentFolderName": "Guinness World Records Singing Marathon (Day 01 to Day 13)"
  },
  {
    "id": "1PauVrxOPB_sbf9r69Fh4bSTM3EH9jSzV",
    "slug": "symposium-01-02-konkani-devotional-music-felicitations-07-11-2026",
    "name": "Symposium 01 & 02 - Konkani Devotional Music & Felicitations (07-11-2026)",
    "shortTitle": "Symposium 01 & 02 - Konkani Devotional Music & Felicitations (07-11-2026)",
    "category": "Symposium & Felicitations",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Symposium 01 & 02 - Konkani Devotional Music & Felicitations (07-11-2026) under Symposium & Felicitations.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1PauVrxOPB_sbf9r69Fh4bSTM3EH9jSzV",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
      "name": "DSC_1515.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
        "name": "DSC_1515.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DwGUUIR1ddTHOFK3XLE6STh1DPIwCqyC",
        "aspectRatio": "3/2"
      },
      {
        "id": "12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9",
        "name": "DSC_1517.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=12zxOkeLmlIRZtAXXTwlDEcruFcG9dAL9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34",
        "name": "DSC_1518.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SryUZlE_QHa-p01KkLQoeZfNv1QS7Z34",
        "aspectRatio": "3/2"
      },
      {
        "id": "1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT",
        "name": "DSC_1519.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1I-XEWi0ViFjXEsOqh3KXdc6Q9rQHkWOT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2",
        "name": "DSC_1520.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z44H8M-0p5m7w7rjxYkLWNmNtjeQjhh2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2",
        "name": "DSC_1521.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Cup-YtCICbhXgFd9yUsxBDsdUE0rkaN2",
        "aspectRatio": "3/2"
      },
      {
        "id": "121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or",
        "name": "DSC_1522.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=121vgQTSLOH-rP3WrYzDxin-y8_Wye4Or",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc",
        "name": "DSC_1523.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yH3eDz4UMg4o6FxB9U4NYzXPBBzYzDIc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn",
        "name": "DSC_1524.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RX_0i3fAqXVqoM8vE3PaGFLFmZxBCfCn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d",
        "name": "DSC_1525.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1QbBGS__sBdIPymmh6_4lYQLPu_WgNQ5d",
        "aspectRatio": "3/2"
      },
      {
        "id": "1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz",
        "name": "DSC_1526.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1SaH-vRfFNrmfNrcAro7hZLgv-OZFlksz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu",
        "name": "DSC_1527.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Zp6vwgaGjell4DRxbq-cBZDeW-7KSeLu",
        "aspectRatio": "3/2"
      },
      {
        "id": "13r-X3GeIuIpuveDbQ9etOLBG0XbviktY",
        "name": "DSC_1528.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13r-X3GeIuIpuveDbQ9etOLBG0XbviktY=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13r-X3GeIuIpuveDbQ9etOLBG0XbviktY=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13r-X3GeIuIpuveDbQ9etOLBG0XbviktY=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13r-X3GeIuIpuveDbQ9etOLBG0XbviktY",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3",
        "name": "DSC_1529.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Fr35d-vi9aNeq8DY_XR3P7YS8fN-u-s3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw",
        "name": "DSC_1530.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1mtBFkqgis93LlOhbKn7eA4rXQLn1Nfdw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI",
        "name": "DSC_1532.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RBPeGQxVm0BDHJxR3omOvVL_rHkCpJUI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S",
        "name": "DSC_1533.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1r88sii8FH0pe8XBxFoPkz0LlBIfAF76S",
        "aspectRatio": "3/2"
      },
      {
        "id": "1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw",
        "name": "DSC_1534.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1NTFioeRTn4RiPjxSmKGn2LV2IXboxEZw",
        "aspectRatio": "3/2"
      },
      {
        "id": "1clevR7TyptOyWUIzk80gWHWoSso4KEvn",
        "name": "DSC_1535.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1clevR7TyptOyWUIzk80gWHWoSso4KEvn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1clevR7TyptOyWUIzk80gWHWoSso4KEvn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1clevR7TyptOyWUIzk80gWHWoSso4KEvn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1clevR7TyptOyWUIzk80gWHWoSso4KEvn",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v",
        "name": "DSC_1536.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dNncWbzsPhc5ySmKA6j5TUn0oUYzhv8v",
        "aspectRatio": "3/2"
      },
      {
        "id": "10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77",
        "name": "DSC_1537.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10b0HoS-ve5i4nwIUTxlOCRwOb8ptQq77",
        "aspectRatio": "3/2"
      },
      {
        "id": "16THYux0m1T25rR4esJo4QIUMvd5D3k3y",
        "name": "DSC_1538.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16THYux0m1T25rR4esJo4QIUMvd5D3k3y=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16THYux0m1T25rR4esJo4QIUMvd5D3k3y=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16THYux0m1T25rR4esJo4QIUMvd5D3k3y=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16THYux0m1T25rR4esJo4QIUMvd5D3k3y",
        "aspectRatio": "3/2"
      },
      {
        "id": "1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u",
        "name": "DSC_1539.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1z7ClHjAp9t-p6lChDk2R_41RgRjdt70u",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3",
        "name": "DSC_1540.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Ybo2C5kPtwpqfxNp_p1my2825RGsnL-3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR",
        "name": "DSC_1542.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pDEgDoPd31UNh1A1pIOON0AIzrLz93VR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-",
        "name": "DSC_1543.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1YYBWueJZh5TUoTp8MGp_iOm-iTgmMoQ-",
        "aspectRatio": "3/2"
      },
      {
        "id": "19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB",
        "name": "DSC_1544.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=19KKTc6iWpXMbBNBitX7IyBw_i9qbCFOB",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LXcRw9ca-XolfQahj_34wKEF6iITt9d5",
        "name": "DSC_1545.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LXcRw9ca-XolfQahj_34wKEF6iITt9d5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LXcRw9ca-XolfQahj_34wKEF6iITt9d5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LXcRw9ca-XolfQahj_34wKEF6iITt9d5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LXcRw9ca-XolfQahj_34wKEF6iITt9d5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cZ7j68lmPSxG7078_jXfpklc2mQqweg-",
        "name": "DSC_1546.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cZ7j68lmPSxG7078_jXfpklc2mQqweg-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cZ7j68lmPSxG7078_jXfpklc2mQqweg-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cZ7j68lmPSxG7078_jXfpklc2mQqweg-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cZ7j68lmPSxG7078_jXfpklc2mQqweg-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR",
        "name": "DSC_1547.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1R70qv2Dxj7xL1Icr_TrVgF0ppNFJaOjR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn",
        "name": "DSC_1548.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XHb0aBLba-MFRrahRF0-yLKDMSCKDMKn",
        "aspectRatio": "3/2"
      },
      {
        "id": "15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj",
        "name": "DSC_1549.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15H5inCT0Qh4uCZR2FLCA9apfaakgMOpj",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Y0ObliD-qxltharytzOMXhq_g5g6COms",
        "name": "DSC_1550.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y0ObliD-qxltharytzOMXhq_g5g6COms=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Y0ObliD-qxltharytzOMXhq_g5g6COms=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y0ObliD-qxltharytzOMXhq_g5g6COms=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Y0ObliD-qxltharytzOMXhq_g5g6COms",
        "aspectRatio": "3/2"
      },
      {
        "id": "1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7",
        "name": "DSC_1551.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1v3rDjDBpefuKb3zYQ_RF6mJnkszIr9x7",
        "aspectRatio": "3/2"
      },
      {
        "id": "195NwVsnCfdv_pLFs-CkanibL_kf5bzp9",
        "name": "DSC_1552.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/195NwVsnCfdv_pLFs-CkanibL_kf5bzp9=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/195NwVsnCfdv_pLFs-CkanibL_kf5bzp9=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/195NwVsnCfdv_pLFs-CkanibL_kf5bzp9=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=195NwVsnCfdv_pLFs-CkanibL_kf5bzp9",
        "aspectRatio": "3/2"
      },
      {
        "id": "1vmLliTEATANixP56NJ_TLfBG_hpsdWo_",
        "name": "DSC_1553.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vmLliTEATANixP56NJ_TLfBG_hpsdWo_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1vmLliTEATANixP56NJ_TLfBG_hpsdWo_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vmLliTEATANixP56NJ_TLfBG_hpsdWo_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1vmLliTEATANixP56NJ_TLfBG_hpsdWo_",
        "aspectRatio": "3/2"
      },
      {
        "id": "17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT",
        "name": "DSC_1554.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=17oLgIT0GA0Lqh1xlue4pQlCAbdgnsYOT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo",
        "name": "DSC_1555.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tVEZZm6zO75OarNCnkiXarOo5QYxiTpo",
        "aspectRatio": "3/2"
      },
      {
        "id": "10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t",
        "name": "DSC_1556.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=10maNxsZjjQhrbt2T0COBQ0UpGF6OI58t",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1",
        "name": "DSC_1557.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xTjVDMLNof-oCZVuMGh-CDhgQU5bLWR1",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV",
        "name": "DSC_1558.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xu7VOmtYCxZElsHtIVvvnwbBDwOLz6AV",
        "aspectRatio": "3/2"
      },
      {
        "id": "1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ",
        "name": "DSC_1559.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1X3D6oS4C5aHHLI0gTnYngeFU3K9qyNrJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m",
        "name": "DSC_1560.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-vFwNcG_B7SW1XP3FCikyUMVg8rZkF6m",
        "aspectRatio": "3/2"
      },
      {
        "id": "13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F",
        "name": "DSC_1561.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=13EZ4RjMrp8cFq31NUayKrNtpkPOkhf8F",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I",
        "name": "DSC_1562.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ef5nxLPht3ADUPcCP_mFOWHqVSu_2A9I",
        "aspectRatio": "3/2"
      },
      {
        "id": "15UCBpR8xQfCfr71Yy_cprWeummrAZdI2",
        "name": "DSC_1563.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15UCBpR8xQfCfr71Yy_cprWeummrAZdI2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15UCBpR8xQfCfr71Yy_cprWeummrAZdI2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15UCBpR8xQfCfr71Yy_cprWeummrAZdI2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15UCBpR8xQfCfr71Yy_cprWeummrAZdI2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li",
        "name": "DSC_1564.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1LbNolSEDpSggwjNEBfQnWVwI2iJSQ5li",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv",
        "name": "DSC_1565.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_FbaS_AfiV5941b_PwgSwfQOmQjsdvqv",
        "aspectRatio": "3/2"
      },
      {
        "id": "1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p",
        "name": "DSC_1566.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1pe8L01Sy4cxi2e5u5d3_xCYPko6Azx_p",
        "aspectRatio": "3/2"
      },
      {
        "id": "1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na",
        "name": "DSC_1567.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1lapoBDGzNB_f30IMH5_okIpXGPaAW4Na",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "parentFolderName": "Symposium & Felicitations"
  },
  {
    "id": "1Wmwpv6uAaiLs4QnmILLGWClm2ksoEVzO",
    "slug": "symposium-03-04-konkani-folk-music-felicitations-08-11-2026",
    "name": "Symposium 03 & 04 - Konkani Folk Music & Felicitations (08-11-2026)",
    "shortTitle": "Symposium 03 & 04 - Konkani Folk Music & Felicitations (08-11-2026)",
    "category": "Symposium & Felicitations",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Symposium 03 & 04 - Konkani Folk Music & Felicitations (08-11-2026) under Symposium & Felicitations.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Wmwpv6uAaiLs4QnmILLGWClm2ksoEVzO",
    "photoCount": 50,
    "coverPhoto": {
      "id": "1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0",
      "name": "DSC_2406.JPG",
      "thumbUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s800",
      "previewUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s1920",
      "fullUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s0",
      "downloadUrl": "https://drive.google.com/uc?export=download&id=1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0",
      "aspectRatio": "3/2"
    },
    "photos": [
      {
        "id": "1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0",
        "name": "DSC_2406.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MKS2EQLEaz_25liX5CKmaipRQVJKwnW0",
        "aspectRatio": "3/2"
      },
      {
        "id": "1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O",
        "name": "DSC_2407.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1RwJTCmA54q4LP2vmv2DOfusGYDIZI36O",
        "aspectRatio": "3/2"
      },
      {
        "id": "1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ",
        "name": "DSC_2408.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1meOKqqXsT1gu_T70SOcFQr6ZVZotJvaQ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O",
        "name": "DSC_2409.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1CpMGlbgAoEcUmhzb7gtCUcibE4fH3G5O",
        "aspectRatio": "3/2"
      },
      {
        "id": "1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe",
        "name": "DSC_2410.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1gYsQfGK4HwWC7knYaK8n9o2U53GBYYJe",
        "aspectRatio": "3/2"
      },
      {
        "id": "15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ",
        "name": "DSC_2411.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=15czn45QcBpQOUZcr65BJI-Su3dPUbZNJ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt",
        "name": "DSC_2412.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1yLUklYHV1TP_eRtvsxLF5sj-rKPfmQlt",
        "aspectRatio": "3/2"
      },
      {
        "id": "1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z",
        "name": "DSC_2413.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1p65e8JU6zinVWLXvPF1vxQ_yNxuKl63Z",
        "aspectRatio": "3/2"
      },
      {
        "id": "1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_",
        "name": "DSC_2414.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1tZbXeEqC9l6XsF_wQnpdBLHwsnSI5B3_",
        "aspectRatio": "3/2"
      },
      {
        "id": "1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl",
        "name": "DSC_2415.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1cEwgqyD-fcNa2hdsgWvVKCPJvOIWyZGl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO",
        "name": "DSC_2416.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kbWmxkxlgPVxjRFbYvcwt0yka6BzbmdO",
        "aspectRatio": "3/2"
      },
      {
        "id": "1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP",
        "name": "DSC_2417.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1bNI5YYVSV6hhUX8oSVKmK2bRP-xQ4mNP",
        "aspectRatio": "3/2"
      },
      {
        "id": "1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc",
        "name": "DSC_2418.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1xtlggxUQfU9RAAb0JKr4NUu39Mc4ZIlc",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-",
        "name": "DSC_2419.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q4OsD_cmf_rC4wnhywsq9zWuMFxI8qW-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT",
        "name": "DSC_2420.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1zn3XnQHH1HY3XWtgJdmfZFpVh9FVazDT",
        "aspectRatio": "3/2"
      },
      {
        "id": "1oo69w_hPigoaopyHizuv67xGWMCij8R5",
        "name": "DSC_2421.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oo69w_hPigoaopyHizuv67xGWMCij8R5=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1oo69w_hPigoaopyHizuv67xGWMCij8R5=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oo69w_hPigoaopyHizuv67xGWMCij8R5=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1oo69w_hPigoaopyHizuv67xGWMCij8R5",
        "aspectRatio": "3/2"
      },
      {
        "id": "1UqReFK4_HWeA31G4G3sIP9E3SD76rJho",
        "name": "DSC_2422.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1UqReFK4_HWeA31G4G3sIP9E3SD76rJho=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1UqReFK4_HWeA31G4G3sIP9E3SD76rJho=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1UqReFK4_HWeA31G4G3sIP9E3SD76rJho=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1UqReFK4_HWeA31G4G3sIP9E3SD76rJho",
        "aspectRatio": "3/2"
      },
      {
        "id": "1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI",
        "name": "DSC_2423.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1sFnOH7a2C2kQXJys4yjtAYK9Jar1OWmI",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-",
        "name": "DSC_2424.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Pr65ONWQmO7FBNPr7Z7xldpZWZKe7CM-",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v",
        "name": "DSC_2425.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XzaG4PTPyv8XtTZmj-Oj0PUQycYEnm9v",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy",
        "name": "DSC_2426.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Q9uU5V6Z7qwi9KfVTPQ8y6gUgWexE8Qy",
        "aspectRatio": "3/2"
      },
      {
        "id": "1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D",
        "name": "DSC_2427.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1txsVpxX0PjDfp6ronSKud1IGUFg2mm7D",
        "aspectRatio": "3/2"
      },
      {
        "id": "1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG",
        "name": "DSC_2428.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1d37f1chUdRjr33RfNwVr4pXo2jAsG9dG",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH",
        "name": "DSC_2429.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JBO8hyV64lRZiKejuC9jz9dEPBlm3DKH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa",
        "name": "DSC_2430.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1_fs-R_62eiyz9zGkcb2Mm6Gdo-EVinXa",
        "aspectRatio": "3/2"
      },
      {
        "id": "1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH",
        "name": "DSC_2431.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1g9u8ZZYLIj3z4zOvvKqbhSgRjwI2RLTH",
        "aspectRatio": "3/2"
      },
      {
        "id": "14d4fb1_klyAAgssARKMbbAeEo-8Gtsah",
        "name": "DSC_2433.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/14d4fb1_klyAAgssARKMbbAeEo-8Gtsah=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/14d4fb1_klyAAgssARKMbbAeEo-8Gtsah=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/14d4fb1_klyAAgssARKMbbAeEo-8Gtsah=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=14d4fb1_klyAAgssARKMbbAeEo-8Gtsah",
        "aspectRatio": "3/2"
      },
      {
        "id": "1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl",
        "name": "DSC_2434.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1rUcwmWr_XBEPpiZctC09eM9Fxn59Wpwl",
        "aspectRatio": "3/2"
      },
      {
        "id": "18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU",
        "name": "DSC_2435.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=18SAkWzsAqbgAMfMi2uS7bllrNuX2AsBU",
        "aspectRatio": "3/2"
      },
      {
        "id": "1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX",
        "name": "DSC_2436.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1EqvvMWaoNgmoFzs7GcYRhjVqJc9FYUvX",
        "aspectRatio": "3/2"
      },
      {
        "id": "1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-",
        "name": "DSC_2437.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1x6Pgep27IgGTnXmyqZQtDc6uPZyrPml-",
        "aspectRatio": "3/2"
      },
      {
        "id": "16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR",
        "name": "DSC_2438.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16Y1_8oZH7Rtk3E4tp4fK0gzs9GsTTicR",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp",
        "name": "DSC_2439.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ZsjABgTEM7hks6KwObk3fokBRUTOf3Kp",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD",
        "name": "DSC_2440.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ADV7WOGin0aD4oP5eJrSSF-1IsqLQ7iD",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl",
        "name": "DSC_2441.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qae-mlszPehCyGoW79nZKUQPcYt2Z4Yl",
        "aspectRatio": "3/2"
      },
      {
        "id": "16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g",
        "name": "DSC_2442.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16LA1s4NiMm6kBrX92kTHfbQktUn0bI-g",
        "aspectRatio": "3/2"
      },
      {
        "id": "1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2",
        "name": "DSC_2443.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1dpcLZfUWiofD53R7pMdxHSO0mvavg2C2",
        "aspectRatio": "3/2"
      },
      {
        "id": "1F9VyaV751684PviGhfYlK-AjF0Mjtsv3",
        "name": "DSC_2444.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1F9VyaV751684PviGhfYlK-AjF0Mjtsv3=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1F9VyaV751684PviGhfYlK-AjF0Mjtsv3=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1F9VyaV751684PviGhfYlK-AjF0Mjtsv3=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1F9VyaV751684PviGhfYlK-AjF0Mjtsv3",
        "aspectRatio": "3/2"
      },
      {
        "id": "1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB",
        "name": "DSC_2445.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1DaxdAxefxOZVhl_vuajL4pOSnDIJY_iB",
        "aspectRatio": "3/2"
      },
      {
        "id": "16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH",
        "name": "DSC_2446.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=16AR_7GFd2EFZl2vJZ0VTUC_uMsXwgXnH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ",
        "name": "DSC_2447.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1JZnsD6ALmItlrtvAfM2vbFctcxJO1dSZ",
        "aspectRatio": "3/2"
      },
      {
        "id": "1XIG7p0BhUV05yOjajKl390DKEvMQdDYq",
        "name": "DSC_2448.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XIG7p0BhUV05yOjajKl390DKEvMQdDYq=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1XIG7p0BhUV05yOjajKl390DKEvMQdDYq=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XIG7p0BhUV05yOjajKl390DKEvMQdDYq=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1XIG7p0BhUV05yOjajKl390DKEvMQdDYq",
        "aspectRatio": "3/2"
      },
      {
        "id": "1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl",
        "name": "DSC_2449.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1MjqqQc3FaDBAFMdc_1iVGGbub9RIZKWl",
        "aspectRatio": "3/2"
      },
      {
        "id": "1kQClwh0u4QNvcFbgPyadSkLKz4our4K6",
        "name": "DSC_2450.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kQClwh0u4QNvcFbgPyadSkLKz4our4K6=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1kQClwh0u4QNvcFbgPyadSkLKz4our4K6=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kQClwh0u4QNvcFbgPyadSkLKz4our4K6=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1kQClwh0u4QNvcFbgPyadSkLKz4our4K6",
        "aspectRatio": "3/2"
      },
      {
        "id": "1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH",
        "name": "DSC_2451.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1h1K9ZLUDytRM3q1tiv4Sc7INVXj7e-eH",
        "aspectRatio": "3/2"
      },
      {
        "id": "1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW",
        "name": "DSC_2452.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1GoZgj0E1Vqx15KpgrhMrXe_jsJMprhmW",
        "aspectRatio": "3/2"
      },
      {
        "id": "1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz",
        "name": "DSC_2453.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1-H13Xn6fDKi9WG-MeGqhEo3l-gSeZjlz",
        "aspectRatio": "3/2"
      },
      {
        "id": "1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF",
        "name": "DSC_2454.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1ibKhF7el5vdNt2Gb1BLfIn3kjCV1TodF",
        "aspectRatio": "3/2"
      },
      {
        "id": "1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm",
        "name": "DSC_2455.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1Qa9eHb5zRdTT6U34gWSnoIZG1k5CJ6Dm",
        "aspectRatio": "3/2"
      },
      {
        "id": "1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C",
        "name": "DSC_2456.JPG",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C=s800",
        "previewUrl": "https://lh3.googleusercontent.com/d/1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C=s1920",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C=s0",
        "downloadUrl": "https://drive.google.com/uc?export=download&id=1W853fpZSjdHUD32J1HcyLPyHpsnDD_9C",
        "aspectRatio": "3/2"
      }
    ],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": true,
    "parentFolderId": "1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "parentFolderName": "Symposium & Felicitations"
  },
  {
    "id": "1BgkA-smrAVbgeeEO3_N5xfakowMsjQ5S",
    "slug": "cultural-exhibition",
    "name": "Cultural Exhibition",
    "shortTitle": "Cultural Exhibition",
    "category": "Convention Events",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo album for Cultural Exhibition.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1BgkA-smrAVbgeeEO3_N5xfakowMsjQ5S",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false
  },
  {
    "id": "17oGRRZA1lXTtANvXJHq5Y-G-2wy1UMjY",
    "slug": "ful-fulota-childrens-nirontori-13-11-2026",
    "name": "Ful Fulota - Children's Niro'nto'ri (13-11-2026)",
    "shortTitle": "Ful Fulota - Children's Niro'nto'ri",
    "category": "Convention Events",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo album for Ful Fulota - Children's Niro'nto'ri (13-11-2026).",
    "driveFolderUrl": "https://drive.google.com/drive/folders/17oGRRZA1lXTtANvXJHq5Y-G-2wy1UMjY",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false
  },
  {
    "id": "1mJOHpsJisVRjXQN3j51arrqLASGj1leL",
    "slug": "hall-of-fame",
    "name": "Hall of Fame",
    "shortTitle": "Hall of Fame",
    "category": "Convention Events",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo album for Hall of Fame.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1mJOHpsJisVRjXQN3j51arrqLASGj1leL",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false
  },
  {
    "id": "11m6CPs9fV6GSCduDBjT9ZLPtelcyXZ9x",
    "slug": "hall-of-fame",
    "name": "Hall of Fame",
    "shortTitle": "Hall of Fame",
    "category": "Convention Events",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Official photo album for Hall of Fame.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/11m6CPs9fV6GSCduDBjT9ZLPtelcyXZ9x",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false
  },
  {
    "id": "1SvnsdO4grgre7xUV_5kwEyO6pXa4Ug8Q",
    "slug": "symposium-05-06-music-for-wellness-international-music-felicitations-08-11-2026",
    "name": "Symposium 05 & 06 - Music For Wellness, International Music & Felicitations (08-11-2026)",
    "shortTitle": "Symposium 05 & 06 - Music For Wellness, International Music & Felicitations (08-11-2026)",
    "category": "Symposium & Felicitations",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Symposium 05 & 06 - Music For Wellness, International Music & Felicitations (08-11-2026) under Symposium & Felicitations.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1SvnsdO4grgre7xUV_5kwEyO6pXa4Ug8Q",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false,
    "parentFolderId": "1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "parentFolderName": "Symposium & Felicitations"
  },
  {
    "id": "1EWpC0K0QzGaHPT0WD4LkuD_ZSB0D8N1q",
    "slug": "symposium-07-08-baila-music-composers-and-songs-felicitations-10-11-2026",
    "name": "Symposium 07 & 08 - Baila Music, Composers and Songs & Felicitations (10-11-2026)",
    "shortTitle": "Symposium 07 & 08 - Baila Music, Composers and Songs & Felicitations (10-11-2026)",
    "category": "Symposium & Felicitations",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Symposium 07 & 08 - Baila Music, Composers and Songs & Felicitations (10-11-2026) under Symposium & Felicitations.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1EWpC0K0QzGaHPT0WD4LkuD_ZSB0D8N1q",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false,
    "parentFolderId": "1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "parentFolderName": "Symposium & Felicitations"
  },
  {
    "id": "1dmGC7sYxHlcgrwxXKrcn9_Dqw8rL7Xl2",
    "slug": "symposium-09-10-theatre-cinema-music-impact-of-mandd-sobhann-music-felicitations-14-11-2026",
    "name": "Symposium 09 & 10 - Theatre & Cinema Music, Impact of Mandd Sobhann Music & Felicitations (14-11-2026)",
    "shortTitle": "Symposium 09 & 10 - Theatre & Cinema Music, Impact of Mandd Sobhann Music & Felicitations (14-11-2026)",
    "category": "Symposium & Felicitations",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Symposium 09 & 10 - Theatre & Cinema Music, Impact of Mandd Sobhann Music & Felicitations (14-11-2026) under Symposium & Felicitations.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1dmGC7sYxHlcgrwxXKrcn9_Dqw8rL7Xl2",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false,
    "parentFolderId": "1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "parentFolderName": "Symposium & Felicitations"
  },
  {
    "id": "11mXxNsFn21MJ8ZvE4PTUKRbjXLJTYghF",
    "slug": "symposium-11-12-ipr-artificial-intelligence-and-music-felicitations-14-11-2026",
    "name": "Symposium 11 & 12 - IPR, Artificial Intelligence and Music & Felicitations (14-11-2026)",
    "shortTitle": "Symposium 11 & 12 - IPR, Artificial Intelligence and Music & Felicitations (14-11-2026)",
    "category": "Symposium & Felicitations",
    "date": "Nov 2026",
    "location": "Kalaangann, Mangalore",
    "photographer": "Mandd Sobhann Media Cell",
    "description": "Session photos: Symposium 11 & 12 - IPR, Artificial Intelligence and Music & Felicitations (14-11-2026) under Symposium & Felicitations.",
    "driveFolderUrl": "https://drive.google.com/drive/folders/11mXxNsFn21MJ8ZvE4PTUKRbjXLJTYghF",
    "photoCount": 0,
    "coverPhoto": null,
    "photos": [],
    "isDriveConnected": true,
    "year": 2026,
    "hasLivePhotos": false,
    "parentFolderId": "1i6F1c1nxwgKePZmcsy72TKZBAcrE5vEF",
    "parentFolderName": "Symposium & Felicitations"
  }
];
