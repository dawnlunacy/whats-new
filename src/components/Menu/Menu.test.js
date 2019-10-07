import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
    let wrapper;
    let local = [{
        id: 1,
        headline: "The Who postpones Denver Concert at the Pepsi Center",
        img: "https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg",
        description: "Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.",
        url: "https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/"
        },
        {
        id: 2,
        headline: "Giant Chicken Skeleton In Denver’s Central Library Stands For More Than Just Dinner",
        img: "https://i0.wp.com/wp-cpr.s3.amazonaws.com/uploads/2019/09/cpr-swolf_black-cube-monumental_DSC8170.jpg?resize=2064,1376",
        description: "The 24-foot-tall chicken skeleton towers over the people who pass through the main hall of the Denver Central Library. Skeletal wings extend to the side, and it looks downright prehistoric.",
        url: "https://www.cpr.org/2019/09/27/giant-chicken-skeleton-in-denvers-central-library-stands-for-more-than-just-dinner/"
        }];
        let technology = [{
            id: 1,
            headline: "Unfixable iOS Device Exploit Is the Latest Apple Security Upheaval",
            img: "https://media.wired.com/photos/5d8e600f34cab0000861c48d/master/w_2560%2Cc_limit/security_jailbreak_MADEPD.jpg",
            description: "Any iPhone device from 2011 to 2017 could soon be jailbroken, thanks to an underlying flaw that there's no way to patch.",
            url: "https://www.wired.com/story/ios-exploit-jailbreak-iphone-ipad/"
            },
            {
            id: 2,
            headline: "SpaceX’s orbital Starship prototype comes together ahead of update event",
            img: "https://techcrunch.com/wp-content/uploads/2019/09/EFfmFEEU8AA1SmA.jpeg?w=1390&crop=1",
            description: "SpaceX has completed joining the bottom and top halves of the Starship orbital-scale prototype it’s building in Boca Chica, Texas.",
            url: "https://techcrunch.com/2019/09/27/spacexs-orbital-starship-prototype-comes-together-ahead-of-update-event/"
            }];
        let entertainment =[{
            id: 1,
            headline: "Spider-Man Will Remain in the Marvel Cinematic Universe",
            img: "https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp",
            description: "The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.",
            url: "https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"
            },
            {
            id: 2,
            headline: "Warner Bros. Thinks a ‘Lot Has Been Said’ About Joker, So It’s Canceling Red Carpet Interviews",
            img: "https://i.kinja-img.com/gawker-media/image/upload/s--4KmyUB9z--/c_scale,dpr_2.0,f_auto,fl_progressive,q_80,w_800/sapqo9o5c10gyewaopjg.png",
            description: "While the larger conversation around Todd Phillips’ upcoming Joker film continues to intensify as people reflect on how the story’s depiction of a white domestic terrorist fits into our cultural landscape, Warner Bros. is attempting to take back some control of the narrative by barring print and broadcast press access to the red carpet of the Hollywood premiere where interviews were to be conducted.",
            url: "https://io9.gizmodo.com/warner-bros-thinks-a-lot-has-been-said-about-joker-1838543086"
            }]
        let science = [{
            id: 1,
            headline: "India's Lost Moon Lander Is Somewhere in This Photo",
            img: "https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg",
            description: "The image was captured by NASA's Lunar Reconnaissance Orbiter (LRO) on Sept. 17 as it flew over the targeted landing site of India's Chandrayaan-2 mission.",
            url: "https://www.livescience.com/india-moon-landing-site-nasa-photo.html"
            },
            {
            id: 2,
            headline: "NASA, in Reddit AMA, says Earth probably won't be eaten by a black hole",
            img: "https://cnet2.cbsistatic.com/img/tM8V3SxstaN-YQiY1QPVMhYBF1k=/2019/09/26/f41e8d77-b008-4887-ae0b-a6dba3e4db60/bh-visualization1.jpg",
            description: "NASA's black hole experts popped up on Reddit on Friday to field questions about these enigmatic objects. ",
            url: "https://www.cnet.com/news/nasa-in-reddit-ama-says-earth-probably-wont-be-eaten-by-a-black-hole/"
            }]
        let health = [{
            id: 1,
            headline: "Man dies after getting infection linked to shellfish, North Carolina officials say",
            img: "https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS",
            description: "A North Carolina man has died after getting an infection often associated with shellfish, state health officials say.",
            url: "https://www.bnd.com/news/nation-world/national/article235549897.html"
            },
            {
            id: 2,
            headline: "Azar, other health officials press people to get flu shots early",
            img: "https://thehill.com/sites/default/files/styles/thumb_small_article/public/flu_012918getty.jpg?itok=1dygJH3l",
            description: "U.S. health officials, including Health and Human Services Secretary Alex Azar, are encouraging Americans to get their flu shots early this year.",
            url: "https://thehill.com/homenews/news/463354-azar-other-public-health-officials-press-people-to-get-flu-shots-early"
            }]
        let mockToggleCurrentSelected = jest.fn();
        let mockEvent1 = {
            target: {
                classlist: ["local", "menuItem"]
            }
        }
        let mockEvent2 = {
            target: {
                classlist: ["technology", "menuItem"]
            }
        }
        
    let mockAppState = {
        local: [],
        technology: [],
        entertainment: [],
        science: [],
        health: [],
        currentTopic: local,
        currentDisplay: local,
        icons:  [() => ({}), () => ({}), () => ({}), () => ({}), () => ({})]
    }


    beforeEach(() => {
        wrapper = shallow(<Menu menu={mockAppState} toggleCurrentSelected={mockToggleCurrentSelected}/>)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})