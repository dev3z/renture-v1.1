

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## following Library is used to create this project 

npx shadcn@latest init -d components/ui

npm i lucide-react dotenv date-fns react-filepond filepond-plugin-image-exif-orientation filepond-plugin-image-preview framer-motion mapbox-gl lodash react-hook-form zod @hookform/resolvers

npm i -D @types/node @types/uuid   
  
npm install -D tailwindcss@3.4.17 postcss autoprefixer
 
npx tailwindcss@3.4.17 init -p
 
npx shadcn@canary init -d components/ui

npx shadcn @latest add avatar badge button card checkbox command dialog  dropdown-menu form input label navigation-menu radio-group select separator sheet sidebar skeleton slider sonner switch  table tabs textarea tooltip

npm install tailwindcss-animate

npm install @reduxjs/toolkit react-redux

npm install @fortawesome/free-brands-svg-icons

npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core


//backend
postgres
postGIS

npm i express cors dotenv helmet morgan jsonwebtoken multer uuid axios body-parser @terraformer/wkt @aws-sdk/client-s3 @aws-sdk/lib-storage

npm i -D rimraf concurrently nodemon  shx ts-node typescript @types/cors @types/morgan @types/node @types/jsonwebtoken @types/multer @types/terraformer__wkt @types/uuid 

npx tsc --init

npm i prisma @prisma/client

npx prisma init
prisma migrate reset
npm run prisma:generate
npm install prisma@latest @prisma/client@latest
npx prisma migrate reset
npx prisma migrate dev --name init
npx prisma migrate dev --name add_postgis_extension

// if any issue
cd server
npx prisma migrate reset
npm run prisma:generate
npx prisma migrate dev --name init
npm run seed


//frontend 
Aws Amplify -- connect authon .. using authon provider
npm i aws-amplify @aws-amplify/ui-react
npm i aws-amplify @aws-amplify/ui-react --legacy-peer-deps
https://docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories/
