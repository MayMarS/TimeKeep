//aboutBlocks
import image1 from '../assets/img/MenWatches-2023.jpg';
import image2 from '../assets/img/WomenWatches-2023.jpg';
import image3 from '../assets/img/JewelryWatches.jpg';
//aboutItems
import accuracy from '../assets/img/accuracy.svg';
import design from '../assets/img/design.svg';
import repair from '../assets/img/repair.svg';
import service from '../assets/img/service.svg';
import value from '../assets/img/value.svg';
//feachuresItems
import precise from '../assets/img/precise.svg';
import minimalism from '../assets/img/minimalism.svg';
import quality from '../assets/img/quality.svg';
//feachuresInfo
//feachuresJewelrySecond
import jewSecond from '../assets/img/jewelry-second.jpg';
//feachuresFinal
import shipping from '../assets/img/shipping.svg';
import returns from '../assets/img/returns.svg';
import warranty from '../assets/img/warranty.svg';
import safe from '../assets/img/safe.svg';
//product otherInfo
import automatic1 from '../assets/img/automatic1.jpg';
import automatic2 from '../assets/img/automatic2.jpg';
import classic1 from '../assets/img/classic1.jpg';
import classic2 from '../assets/img/classic2.jpg';
//social
import insta from '../assets/img/instagram.svg';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import linkedin from '../assets/img/linkedin.svg';

let state = {

    header: {
        links: [{name: "Home", adress: "/Home"}, {name: "Shop", adress: "/Shop"}, {name: "Watches", adress: "/Shop/Watches"}, {name: "Jewelry", adress: "/Shop/Jewelry"}, 
                {name: "About", adress: "/About"}, {name: "Contact", adress: "/Contact"}]
    },

    about: {
        blocks: [{image: `${image1}`, title: 'BORN FROM A ', span: 'DREAM', text1: 'With each passing year, we grow and innovate, introducing new materials and designs that quickly became fan favorites.', text2: 'Their commitment to quality and originality earned us a loyal following of customers who appreciated the unique beauty and craftsmanship of  pieces.'},
                {image: `${image2}`, title: 'PREMIUM MATERIALS, MODERN ', span: 'DESIGN', text1: 'Using only the best materials, including premium metals, high-grade crystals, and genuine leather straps, we have earned the trust of our customers.', text2: 'Our dedication to quality and unique design attracts followings all over the world.'},
                {image: `${image3}`, title: 'OUR JOURNEY TO BE ', span: 'BETTER', text1: 'Today, the company has expanded its reach beyond its original city and is known around the world for its stunning watches and jewelry. ', text2: 'We startes with a dream. Finally we have built a legacy that is believed to continue to inspire and captivate for generations to come.'},
        ],
        items: [{image: `${quality}`, title: 'Quality and Durability', text: 'A good watch company will prioritize quality materials and construction, resulting in watches that are built to last. Customers can trust that their watch will keep accurate time and withstand daily wear and tear.'},
                {image: `${design}`, title: 'Style and Design', text: 'A watch is not just a functional device, but also a fashion statement. A reputable watch company will offer a variety of styles and designs to cater to different tastes and occasions.'},
                {image: `${accuracy}`, title: 'Precision and Accuracy', text: 'Watches are often used as a means of keeping time accurately, and a reputable watch company will prioritize precision and accuracy in their products. Customers can rely on their watch to keep time consistently, whether they are using it for work, sports, or leisure activities.'},
                {image: `${repair}`, title: 'Warranty and Repairs', text: 'A reliable watch company will offer a warranty on their products, giving customers peace of mind that they are protected against any defects or issues. In addition, they will provide repair services should anything go wrong with the watch, ensuring that customers can continue to enjoy their timepiece for years to come.'},
                {image: `${service}`, title: 'Customer Service', text: 'A good watch company will prioritize customer service and ensure that their customers have a positive experience when shopping for and using their products. They will be responsive to customer inquiries and concerns, and will go above and beyond to ensure customer satisfaction.'},
                {image: `${value}`, title: 'Investment Value', text: 'High-quality watches can be valuable investments that appreciate in value over time. A reputable watch company will create products that retain their value and appeal, making them a worthwhile purchase for customers who want to make a long-term investment in a quality timepiece.'},
        ],
        concept: ['We offer customers the ability to customize their watches according to their unique preferences and style.',
                'Customers can choose the size, color, material, and design of their watch face and band, as well as add personalized engravings or embossing.',
                'This allows customers to create a one-of-a-kind timepiece that reflects their personality and individuality.'
        ]
    },

    main:
    {
        feachures: {
            firstItems: [
                {image: `${precise}`, title: 'Always precise', text: "Customers can rely on their watch to keep time consistently, whether they are using it for work, sports, or leisure activities."},
                {image: `${minimalism}`, title: 'Minimalism feast ', text: "A watch is not just a functional device, but also a fashion statement. No busy features. No notifications. A new kind of classic."},
                {image: `${quality}`, title: 'Quality investment', text: "We create high-quality products that retain their value and appeal, making them a worthwhile purchase for customers."}
            ],
            watchesInfo1:
                {image: 'https://cdn.builder.io/api/v1/image/assets%2F8a0dd03ad52340849785aa8840f575d4%2F6ac1e4a3a9df4c9593af31b62ac9c8ae?format=webp&width=2000', 
                title: 'STAY ON THE DOT', text: 'Watches dotted dial brings a pop of the unexpected to our minimalist touch. Subtle design elements like domed circle markers, a curved silhouette and softly sculpted crown nod to the collection\'s name motif.'},
            watchesInfo2: 
                {image: 'https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw76fcdc99/images/products/28000267_l_1.jpg?sw=800&sh=800', 
                title: 'MINIMALIST STYLE', text: 'Cut out the noise. Our two hand watches bring you back to the basics with precise  quartz timekeeping tracked by hour and minute hands in a clean minimalism aesthetic.'},
            watchesInfo3: 
                {image: 'https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwb2c52c33/images/products/28000253_l_1.jpg?sw=800&sh=800', 
                title: 'DUAL TIME', text: 'So you\'re traveling the world. Or working bi-coastal. Or just wanting some extra practicality in your timepiece. This dual timezone design is for you. Its sub-dials can display two different times at once. Set one to your hometown, and set the other to your next destination.'},
            
            jewelryInfo: {image: `${jewSecond}`, title: 'Fine Jewelry', text1: '...is set apart by it\'s exceptional 18k gold and platinum plate finishes over sustainable, recycled sterling silver cores.', text2: 'Our recycled sterling silver pieces are environmentally responsible alternatives to mined silver, designed to cut down CO2 emissions and reduce water usage.'},
    
            finalItems: [
                {image: `${shipping}`, title: 'Worldwide shipping'},
                {image: `${returns}`, title: 'Easy returns'},
                {image: `${warranty}`, title: '24 months warranty'},
                {image: `${safe}`, title: '100% safe checkout'}
            ]
        }
    },

    product: {
        feachuresItems: [
            {image: `${precise}`, title: 'Always precise', text: "Customers can rely on their watch to keep time consistently, whether they are using it for work, sports, or leisure activities."},
            {image: `${minimalism}`, title: 'Minimalism feast ', text: "A watch is not just a functional device, but also a fashion statement. No busy features. No notifications. A new kind of classic."},
            {image: `${quality}`, title: 'Quality investment', text: "We create high-quality products that retain their value and appeal, making them a worthwhile purchase for customers."}
        ],
        otherInfoImages1: {image1: `${automatic1}`, image2: `${automatic2}`},
        otherInfo1:
        ['The next level of timekeeping is powered by you.',
        'Automatic watches have been loved for centuries for their sophisticated self-winding engines.',
        'Made up of an intricate series of wound springs and gear trains, they use kinetic energy from your wrist to keep time.',
        'Take a look through its exhibition case back to experience our precise, mechanical heartbeat for yourself.'
        ],
        otherInfoImages2: {image1: `${classic1}`, image2: `${classic2}`},
        otherInfo2: ['Some things never go out of style.',
        'Our 3 hand watches blend precise Japanese quartz timekeeping (tracked by hour, minute and second hands) with a California clean aesthetic.',
        'everyday essential features an ultra slim case that can easily move between casual and formal occasions.',
        'No busy features. No notifications. A new kind of classic.'
        ],
        otherTitle: {title: "What's up, Spring", text: "A perfect opportunity to add a refreshing new wardrobe staple into your mix"}
    },
        
    footer: {
        titles: {title1: "Shop", title2: "Customer Service", title3: "Join the TimeKeep"},
        links1: ["Special Offers", "Best Sellers", "Sales"],
        links2: ["My account", "Contact us", "Shipping & Returns", "FAQ"],
        links3: ["About us", "Blog", "Press", "Jobs"],

        social: [
        {
            link: "https://www.instagram.com/",
            icon: `${insta}`
        },
        {
            link: "https://www.facebook.com/",
            icon: `${facebook}`
        },
        {
            link: "https://www.twitter.com/",
            icon: `${twitter}`
        },
        {
            link: "https://www.linkedin.com/",
            icon: `${linkedin}`
        }
        ]
    }
}

export default state;