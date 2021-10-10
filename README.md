# nodejs-with-TS-installation
npm install
tsc --init
create src folder for your typescript codes ,
create file in sec folder. like index.ts or anything___.ts
now make another folder give name it output.
now go to tsconfig.json and uncomment this to and give them path,
"outDir": "./output",                                 
"rootDir": "./src",
here outDir is save all your js file.
and rootdir is for all typescript file.
now go to package.json file,
add in script  "start": "tsc && node output/index.json"
here start is use for direct compile and run your program.
now add some library in your project.
i prefer lodash and request library it is simple.
for install lodash and request ,
npm install request lodash --save
this two library is in js for type script,
npm install @types/lodash @types/request --save-dev
its gonna fetch those two library in devdependencies in package.json
now for compile and run your file,
npm start.
