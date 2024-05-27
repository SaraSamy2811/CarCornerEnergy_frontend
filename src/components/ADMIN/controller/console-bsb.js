import React, { Component } from 'react';

class StickyNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preStuckClass: "pre-stuck",
      stuckClass: "stuck",
      stickyTarget: null,
      stickyNode: null,
      stuckClassTimeout: null,
      stuckBg: null,
      stuckTheme: null,
      scrollYDown: 250,
      scrollYUp: 25,
      bsTheme: null
    };
  }

  componentDidMount() {
    const { stickyNode } = this.state;
    window.addEventListener("scroll", this.handleScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollEvent);
  }

  handleScrollEvent = () => {
    const { scrollYDown, scrollYUp, stickyNode } = this.state;
    const { stuckClass, preStuckClass, stuckBg, bsTheme, stuckTheme } = this.props;
    const scrollY = window.scrollY;

    if (scrollY >= scrollYDown) {
      if (!stickyNode.classList.contains(preStuckClass)) {
        stickyNode.classList.add(preStuckClass);
        this.setState({
          stuckClassTimeout: setTimeout(() => {
            stickyNode.classList.add(stuckClass);
            if (stuckBg) stickyNode.classList.add(stuckBg);
            if (stuckTheme) stickyNode.setAttribute("data-bs-theme", stuckTheme);
          }, 250)
        });
      }
    } else if (scrollY <= scrollYUp) {
      if (stickyNode.classList.contains(preStuckClass) || stickyNode.classList.contains(stuckClass)) {
        stickyNode.classList.remove(preStuckClass);
        stickyNode.classList.remove(stuckClass);
        if (stuckBg) stickyNode.classList.remove(stuckBg);
        if (bsTheme) stickyNode.setAttribute("data-bs-theme", bsTheme);
      }
    }
  };

  render() {
    return (
      <nav className="bsb-tpl-navbar-sticky">
        {/* Your navbar content goes here */}
      </nav>
    );
  }
}

export default StickyNavbar;
