# Digital Wallet App

## How to run project
- Clone the project
- Open project folder with terminal
- Checkout to branch you want
- npm install
- npm start


## Used tech stack
- Node 14.19.1
- npm 8.7.0
- Created with create-react-app

## Project description

Project has 2 branches; stage-1 and stage-2.
In stage-1 branch applied design from figma with components, icons, colors for mobile and desktop responsive.
all data static and clicks are restricted (except dialog open)

stage-2 branch created from stage-1 branch after design implementation is finished. This branch includes request to given
api get and put methods. All data is from given api response for example card numbers, transactions history, balance etc.
and user can add new card to list. User can change selected card dynamically with click on it and other cards will be blurred.

I created components to split logic. Every component must handle small piece of entire application, so I tried to achieve this.
I tried my best about pixel perfect design but my experience with this topic is not so much so, I did my best and
found out I have to learn so much things with scss and responsive design, I hope I did well about design.

I created util methods to avoid code duplication for format currency amount and dates.

### [Stage-1 branch public demo link](https://digital-wallet-3ufqr9ss5-muratcank.vercel.app/)
