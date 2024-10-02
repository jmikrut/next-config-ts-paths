# Reproduction steps

1. `npm i`
2. `npm run dev`, see that it works
3. go to `next.config.ts` and comment out `import { hello } from '@hello-works'`
4. then comment _in_ `import { hello } from '@hello-broken'`
5. `npm run dev`
6. boom

Looks like paths with a `.` in the name break the transpilation `next.config.ts`. 

Of note, paths that have `.` in the name work fine outside of `next.config.ts`.
