import React, { Component } from "react"

export default class Menu extends Component {
  constructor(props) {
    super(props)
    console.log(props.items)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
    }
  }

  render() {
    return <div>hello from menu</div>
  }
}
