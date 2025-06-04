import dropdown from "@zedai00/dropdownz"

const menu = document.querySelector('.menu')
const menuItems = document.querySelector('.menu-items')

const d = dropdown(menu, menuItems)
d.initDropdown(0.5)
