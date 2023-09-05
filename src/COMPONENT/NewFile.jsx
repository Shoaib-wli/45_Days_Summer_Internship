import React from 'react'
// import Properties from './properties'
import Card from './card'

const NewFile = () => {
    const arrObj=[{
        title: "myTitle1",
        content: "myContent1",
        img: "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/10/Google-Campus-Tech-Jobs-2019-Dice-1.png"
    },
    {
        title:'myTitle2',
        content:"myContent2",
        img:"https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/10/Google-Campus-Tech-Jobs-2019-Dice-1.png"
    }
    ,{
        title:"myTitle3",
        content:"myContent3",
        img:"https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/10/Google-Campus-Tech-Jobs-2019-Dice-1.png"
    }
    ,{
        title:"myTitle4",
        content:"myContent4",
        img:"https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/10/Google-Campus-Tech-Jobs-2019-Dice-1.png"
    }
    ,{
        title:"myTitle5",
        content:"myContent5",
        img:"https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/10/Google-Campus-Tech-Jobs-2019-Dice-1.png"
    }
    ,{
        title:"myTitle6",
        content:"myContent6",
        img:"https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/10/Google-Campus-Tech-Jobs-2019-Dice-1.png"
    }
    ,{
        title:"myTitle7",
        content:"myContent7",
        img:"https://www.dice.com/binaries/medium/content/gallery/dice/insights/2019/10/Google-Campus-Tech-Jobs-2019-Dice-1.png"
    }
]

    return(
        <>
            {
                arrObj.map((ele)=>(
                    <Card  title={ele.title } content={ele.content} img={ele.img} />
                ))
                
            }
        </>
    )
        
}
  


export default NewFile;
// export default Properties;
// export default Myfun;
