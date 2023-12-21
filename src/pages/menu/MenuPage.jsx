import './MenuPage.css'

import Beer from '../../components/menu/Beer'
import Food from '../../components/menu/Food'
import { useState } from 'react'

const MenuPage = ({responsiveClass}) => {

    const food = [
        {
            name: 'Wings',
            extras: 'with Ranch or Blue Cheese\nBuffalo | Honey Old Bay | Carolina Gold | Garlic Cajun | Smoked | Cauliflower',
            price: '10.75'
        },
        {
            name: 'Nachos',
            extras: 'with 2 Salsas, Queso, Sour Cream, Cilantro\nChicken (+$3) | Pulled Pork (+$3) | Steak (+$5)',
            price: '8.75'
        },
        {
            name: 'Fried Pickles',
            extras: 'with M8 Sauce',
            price: '4.75'
        },
        {
            name: 'Classic or Beer Brat',
            extras: 'with kraut and whole grain mustard, served on a roll',
            price: '9.25'
        },
        {
            name: 'Aussie Sausage Roll',
            extras: 'with Beef or Pork',
            price: '9.25'
        },
        {
            name: 'Aussie Steak and Mushroom Pie',
            extras: '',
            price: '13.75'
        },
        {
            name: 'Sliders',
            extras: 'with Pulled Pork or Chicken, pickled reds, fresh slaw, and Carolina gold sauce',
            price: '12.50'
        },
        {
            name: 'Philly Cheesesteak Sliders',
            extras: 'with thinly sliced Ribeye, monterey jack, peppers and onions',
            price: '14.80'
        }
    ]

    const beers = {
        draft: [
            {
                name: 'Downunder 395',
                type: 'Amber Lager',
                abv: '5.4%',
                owner: 'M8 Brewing',
                description : 'Nice easy drinking Amber lager. Downunder 395 is brewed at M8, right under the famous I-395 with a flavour profile from downunder that will give your tastebuds the sensation of a vacation without the 24hr flight!'
            },
            {
                name: 'Czech M8',
                type: 'Czech Pilsner',
                abv: '5.4%',
                owner: 'M8 Brewing',
                description : 'While Prague is known for its Pilsner\'s, Australia is the land of the lager. Crisp, easy to drink Pils is a staple of the Aussie beer culture and we can\'t wait for you to try it! A true Czech-style pilsner with an Aussie accent, our Czech M8 pils is the perfect sip whether it\'s your first drink of the day or your last. It\'s crisp and easy to drink, but still robust. A harmonious blend of worlds, our Czech M8 Pils is equally at home in Prague, Sydney, or Baltimore—or wherever you choose to savour this classic brew.'
            },
            {
                name: 'Slim Dusty Hazy IPA',
                type: 'New Zealand IPA',
                abv: '5.8%',
                owner: 'M8 Brewing',
                description : 'Slim Dusty is an Aussie legend and the perfect person to name our Hazy after. When you pour a glass of our Hazy IPA, we hope you picture those hazy lines of heat rising up off the Outback dunes. And we hope you think of Australia\'s King of Country Music, Slim Dusty who became famous for his ballads of the bush, his most famous, the nightmare "Pub with no beer". Made with Aussie and New Zealand hop verities, the smooth, flavoured Slim Dusty Hazy is for your inner maverick—that part of you that reaches farther, daring to achieve greatness.'
            },
            {
                name: 'Hammerhead Hefeweizen',
                type: 'Wheat Beer',
                abv: '4.9%',
                owner: 'M8 Brewing',
                description : 'The Hammerhead is a traditional Bavarian Hefeweizen with notes of banana and clove with smooth taste that you will want more than one of. Aggressively delicious!'
            },
            {
                name: 'Fraser Island Pacific Ale',
                type: 'Australian Pale Ale',
                abv: '6.5%',
                owner: 'M8 Brewing',
                description : 'Nestled off the Pacific coast of Australia and home to some of the country\'s most diverse flora and fauna, Fraser Island is one of the jewels of the Land Down Under. Dry hopped with Galaxy and Vic Secret varieties straight from Australia, lending notes of citrus and passionfruit, our Pacific IPA pays fitting tribute to the land it hails from. Enjoy this bight-bodied brew and raise your glass to crocs, dingo\'s, roos, and mateship.'
            },
            {
                name: 'Southern Cross ESB',
                type: 'Bitter - Extra Special',
                abv: '5.3%',
                owner: 'M8 Brewing',
                description : 'Our Southern Cross ESB is a tribute to the English heritage of this richly flavored, medium-bodied ale, beloved not only in England but also down under in Australia. This exceptional brew is named after the iconic "Southern Cross" constellation, the guiding light that led Captain Cook and the English settlers to the shores of Australia. You know those stars in the Aussie flag? That\'s the Southern Cross. Crafted with care, it embodies the spirit of exploration, inspiring you to embark on journeys of your own. May your adventures be as rich and daring as the brew within.'
            },
            {
                name: 'Brumby Blonde',
                type: 'Blonde Ale',
                abv: '4.5%',
                owner: 'M8 Brewing',
                description : 'The Brumby Blonde is inspired by the untamed spirit of the wild Australian horse, the Brumby, which roams freely through the snow-covered Australian Alps. Much like its namesake, the Brumby Blonde is a beer that combines a free-spirited ease with unapologetic boldness. The Brumby name also carries the legacy of Australia\'s most remarkable rugby team in recent history. The Brumbies began as a ragtag team of rejects that shocked the nation by making the finals in just their second year as a team. Buck expectations with this refreshing, clean-tasting beer that\'s more than it seems.'
            },
            {
                name: 'Magpie Stout',
                type: 'Irish Dry',
                abv: '4.2%',
                owner: 'M8 Brewing',
                description : 'A 4.2% dry Irish stout with aromas of coffee and malt. Smooth and well balanced. If the Baltimore Ravens were an Australian \'footy\' club, they\'d be called the Magpies. The Magpie, also known as the Australian raven, is famous for its shiny black plumage, fierce intelligence, and protective nature. Our Magpie Irish Stout is brewed with notes of coffee and toasted malt with a full body that goes down smooth and velvety. It\'s perfect for raising a glass to a win on Sunday.'
            },
            {
                name: 'Whitsunday',
                type: 'XPA',
                abv: '5.5%',
                owner: 'M8 Brewing',
                description : 'This crisp tasting version of a Pale Ale is only 5.5% and has a hint of caramel malt that finishes light and goes down easily'
            }
        ],
        cans: [
            {
                name: 'Whitsunday',
                type: 'XPA',
                abv: "5.5%",
                owner: 'M8 Brewing',
            },
            {
                name: 'Hammerhead Hefeweizen',
                type: 'Wheat Beer',
                abv: '4.9%',
                owner: 'M8 Brewing',
            },
            {
                name: 'Brumby Blonde',
                type: 'Blonde Ale',
                abv: "4.5%",
                owner: 'M8 Brewing',
            },
            {
                name: 'Slim Dusty Hazy IPA',
                type: 'New Zealand IPA',
                abv: '5.8%',
                owner: 'M8 Brewing',
            },
            {
                name: 'Czech M8',
                type: 'Czech Pilsner',
                abv: '5.4%',
                owner: 'M8 Brewing',
            },
            {
                name: 'Southern Cross ESB',
                type: 'Bitter - Extra Special',
                abv: '5.3%',
                owner: 'M8 Brewing',
            },
            {
                name: 'Magpie Stout',
                type: 'Irish Dry',
                abv: '4.2%',
                owner: 'M8 Brewing',
            },
            {
                name: 'Fraser Island Pacific Ale',
                type: 'Australian Pale Ale',
                abv: '6.5%',
                owner: 'M8 Brewing',
            }
        ],
        onDeck: [
            {
                name: 'Byron Bay Tropical IPA',
                type: 'Fruited IPA',
                abv: '6%',
                owner: 'M8 Brewing',
                description: 'Meet M8’s Byron Bay Tropical IPA: the only IPA you can drink on the beach. Infused with the vibrant flavours of mango, blood orange, and unique New Zealand Hops from Kiwi wine country, this brew carries a subtle hint of white wine for a breezy twist. Our BB TIPA strikes the perfect balance—never too sweet, always refreshing. Whether you\'re basking on the sands of Byron Bay or relaxing by the docks in Chesapeake Beach, or even just dreaming about it, this IPA is the ideal summer mate.'
            }
        ]
    }

    const renderedFood = food.map((ele, index)=> <Food responsiveClass={responsiveClass} key={index} name={ele.name} extras={ele.extras} price={ele.price}/>)
    const renderedDrafts = beers.draft.map((ele, index)=><Beer key={index} order={index} name={ele.name} abv={ele.abv} type={ele.type} owner={ele.owner} description={ele.description}/>)
    const renderedCans = beers.cans.map((ele, index)=><Beer key={index} order={index} name={ele.name} abv={ele.abv} type={ele.type} owner={ele.owner} description={ele.description}/>)
    const renderedOnDeck = beers.onDeck.map((ele, index)=><Beer key={index} order={index} name={ele.name} abv={ele.abv} type={ele.type} owner={ele.owner} description={ele.description}/>)

    const [menuType, setMenuType] = useState(true)
    console.log(menuType)

    if(responsiveClass=='small'){
        return (<>

        <div className="menu-options">
            <div onClick={()=>setMenuType(true)} className={`menu-option ${menuType ? 'active' : ''}`}>Beer</div>
            <div onClick={()=>setMenuType(false)} className={`menu-option ${!menuType ? 'active' : ''}`}>Food</div>
        </div>

        <div className="columns">

        {menuType && (<div className="column menu-wrapper">
                <h1 className='menu-title'>Beer</h1>
                <h2 className='menu-subtitle'>Drafts</h2>
                {renderedDrafts}
                <h2 className='menu-subtitle'>Cans and Bottles</h2>
                {renderedCans}
                <h2 className='menu-subtitle'>On Deck</h2>
                {renderedOnDeck}
            </div>)}

        {!menuType && (<div className="column menu-wrapper">
            <h1 className='menu-title'>Food</h1>
            {renderedFood}
            </div>)}
        </div>
        </>)
    } else {
        return (
            <div className="columns">

                <div className="column menu-wrapper">
                    <h1 className='menu-title'>Beer</h1>
                    <h2 className='menu-subtitle'>Drafts</h2>
                    {renderedDrafts}
                    <h2 className='menu-subtitle'>Cans and Bottles</h2>
                    {renderedCans}
                    <h2 className='menu-subtitle'>On Deck</h2>
                    {renderedOnDeck}
                </div>
    
                <div className="column menu-wrapper">
                    <h1 className='menu-title'>Food</h1>
                    {renderedFood}
                </div>
            </div>
        )
    }
}

export default MenuPage