import FrameAnimation from "@mediamonks/display-temple/animation/FrameAnimation"
import { SplitText } from "gsap/all";

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container, config) {
    super();

    this.container = container;
    this.config = config;
    this.copy_a = new SplitText('.copy_a', {type: 'words'});
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
  frame0(tl){
    tl.addLabel('frame0')
    tl.to('.content', {duration:1, opacity: 1});
    tl.to('.violet-bg', {x: '100%', ease: 'expo.out', duration: .8})
    tl.from([this.copy_a.words, '.cta', '.copy_b'], {stagger: .2, opacity: 0, x: '-20px', ease: 'back', duration: .8}, 'frame0+=1.2');
    if (this.config.content.size != "300x250") {
      tl.from('.product', {opacity: 0, ease: 'back.out', duration: .8}, 'frame0+=1.5')
    } else {
      tl.from('.product', {x: '110%', ease: 'expo.out', duration: 2}, 'frame0+=1.5')
    }
  }
}
