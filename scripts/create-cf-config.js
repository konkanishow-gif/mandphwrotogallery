const fs = require('fs');
const path = require('path');

const config = {
  CallerReference: `fwkmmc-manddsobhann-org-${Date.now()}`,
  Aliases: {
    Quantity: 1,
    Items: ["fwkmmc.manddsobhann.org"]
  },
  DefaultRootObject: "index.html",
  Origins: {
    Quantity: 1,
    Items: [
      {
        Id: "S3-fwkmmc-manddsobhann-org-bucket",
        DomainName: "fwkmmc-manddsobhann-org-bucket.s3.ap-south-1.amazonaws.com",
        OriginPath: "",
        CustomHeaders: {
          Quantity: 0
        },
        S3OriginConfig: {
          OriginAccessIdentity: ""
        },
        ConnectionAttempts: 3,
        ConnectionTimeout: 10,
        OriginShield: {
          Enabled: false
        },
        OriginAccessControlId: "E7214LJ805YFR"
      }
    ]
  },
  OriginGroups: {
    Quantity: 0
  },
  DefaultCacheBehavior: {
    TargetOriginId: "S3-fwkmmc-manddsobhann-org-bucket",
    TrustedSigners: {
      Enabled: false,
      Quantity: 0
    },
    TrustedKeyGroups: {
      Enabled: false,
      Quantity: 0
    },
    ViewerProtocolPolicy: "redirect-to-https",
    AllowedMethods: {
      Quantity: 3,
      Items: ["HEAD", "GET", "OPTIONS"],
      CachedMethods: {
        Quantity: 2,
        Items: ["HEAD", "GET"]
      }
    },
    SmoothStreaming: false,
    Compress: true,
    LambdaFunctionAssociations: {
      Quantity: 0
    },
    FunctionAssociations: {
      Quantity: 0
    },
    FieldLevelEncryptionId: "",
    ForwardedValues: {
      QueryString: false,
      Cookies: {
        Forward: "none"
      },
      Headers: {
        Quantity: 0
      },
      QueryStringCacheKeys: {
        Quantity: 0
      }
    },
    MinTTL: 0,
    DefaultTTL: 3600,
    MaxTTL: 86400
  },
  CacheBehaviors: {
    Quantity: 0
  },
  CustomErrorResponses: {
    Quantity: 2,
    Items: [
      {
        ErrorCode: 403,
        ResponsePagePath: "/index.html",
        ResponseCode: "200",
        ErrorCachingMinTTL: 10
      },
      {
        ErrorCode: 404,
        ResponsePagePath: "/index.html",
        ResponseCode: "200",
        ErrorCachingMinTTL: 10
      }
    ]
  },
  Comment: "FWKMMC Photo Library - manddsobhann.org",
  Logging: {
    Enabled: false,
    IncludeCookies: false,
    Bucket: "",
    Prefix: ""
  },
  PriceClass: "PriceClass_All",
  Enabled: true,
  ViewerCertificate: {
    CloudFrontDefaultCertificate: false,
    ACMCertificateArn: "arn:aws:acm:us-east-1:653340784921:certificate/b3d90c3d-a175-4b77-a8ed-075f25d248fe",
    SSLSupportMethod: "sni-only",
    MinimumProtocolVersion: "TLSv1.2_2021",
    Certificate: "arn:aws:acm:us-east-1:653340784921:certificate/b3d90c3d-a175-4b77-a8ed-075f25d248fe",
    CertificateSource: "acm"
  },
  Restrictions: {
    GeoRestriction: {
      RestrictionType: "none",
      Quantity: 0
    }
  },
  WebACLId: "",
  HttpVersion: "http2",
  IsIPV6Enabled: true
};

const targetPath = path.join(__dirname, '..', 'scratch', 'fwkmmc-cf-dist-config.json');
fs.writeFileSync(targetPath, JSON.stringify(config, null, 2), 'utf-8');
console.log('Saved CloudFront configuration to', targetPath);
