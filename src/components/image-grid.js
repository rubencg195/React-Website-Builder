import React, { Component } from 'react'
import { View, Mask } from 'mdbreact';
import StackGrid from "react-stack-grid";
//https://github.com/tsuyoshiwada/react-stack-grid
const images = [
    { title: "", url: "https://i.pinimg.com/originals/83/40/89/834089e23bca92b9d86c707c8fd73e1f.jpg" },
    { title: "", url: "http://catinhouse.co/wp-content/uploads/2016/06/Point-Random-Architecture-Design-Basic-Design-By-Valeriusmaximus-Dxtdxe-For-Design-And-Architecture.jpg" },
    { title: "", url: "https://static.dezeen.com/uploads/2018/07/aspire-house-process-architecture-housing-usa_dezeen_2364_hero-852x479.jpg" },
    { title: "", url: "http://davignonmartin.ca/_graphics/bg_marquee.jpg" },
    { title: "", url: "https://www.sketchup.com/sites/www.sketchup.com/files/sketchup-features-images/feature-img--make-easier-03_1.png" },
    { title: "", url: "https://www.impressiveinteriordesign.com/wp-content/uploads/2016/09/Rosedale-Residence-by-KUBE-architecture.jpg" },
    { title: "", url: "http://snapjaxx.co/wp-content/uploads/2018/05/perfect-architecture-designs-pertaining-to-architectural-design-by-popix1-on-deviantart-other.jpg" },
];
let  imgDemo = `./0/Habitacion Interior.jpg`;

export default class ImageGrid extends Component {
    generateImages() {
        let { min, max } = this.props;
        return images.map((img, index) => {
            let newHeigth = max; //Math.floor((Math.random() * max) + min);
            console.log("Position: ", index, " H: ", newHeigth, " W: ", max, " URL:  ", imgDemo);
            return <div
                style={{
                    // backgroundImage: `url(${imgDemo})`,
                    backgroundImage: `url(${img.url})`,
                    width: max,
                    height: `${newHeigth}px`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat"
                }}
                key={`key-${index}`}
            >
            </div>;
        
            // <View
            //     key={`key-${index}`}
            // >
            //     <img
            //         style={{
            //             width: max,
            //             height: `${Math.floor((Math.random() * max) + min)}px`,
            //         }}

            //         src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
            //     <Mask pattern={1} className="flex-center">
            //         <p className="white-text">.pattern-1</p>
            //     </Mask>
            // </View>
        });
    }
    render() {
        let { min, max } = this.props;
        return (
            <StackGrid
                columnWidth={max}
            >
                {this.generateImages()}
            </StackGrid>
        )
    }
}
