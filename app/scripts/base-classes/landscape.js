class Landscape {
  constructor(id, classes, pos) {
    this.name = id

    this.position = {x:0, y:0}
    this.height = parseInt(pos.height.replace('px', ''))
    this.width = parseInt(pos.width.replace('px', ''))
    let div = document.createElement("DIV")
    div.id = id
    div.className = classes
    document.getElementById("landscape").appendChild(div);
    this.isSolid = div.classList.contains('solid')
    this.isBlind = div.classList.contains('blind')
    this.isActionItem = div.classList.contains('action-item')
    this.isStickyRight = div.classList.contains('sticky-right')
    this.isStickyLeft = div.classList.contains('sticky-left')
    this.isStickyBottom = div.classList.contains('sticky-bottom')
    this.isJumpThrough = div.classList.contains('jump-through')
    this.isDeathLeft = div.classList.contains('death-left')
    this.isDeathRight = div.classList.contains('death-right')
    this.isNextSceneTrigger = div.classList.contains('next-scene')
    if (this.isSolid) {
      solids.push(this)
    }
    if (this.isBlind) {
      blinds.push(this)
    }
    if (this.isActionItem) {
      actionItems.push(this)
    }
    if (pos.bottom) {
      div.style.bottom = pos.bottom
      this.position.y = world.height - parseInt(pos.bottom.replace('px', '')) - this.height
    }
    if (pos.top) {
      div.style.top = pos.top
      this.position.y = parseInt(pos.top.replace('px', ''))
    }
    if (pos.right) {
      div.style.right = pos.right
      this.position.x = world.width - parseInt(pos.right.replace('px', '')) - this.width
    }
    if (pos.left) {
      div.style.left = pos.left
      this.position.x = parseInt(pos.left.replace('px', ''))
    }
    if (pos.action) {
      this.action = pos.action
    }
    div.style.width = pos.width
    div.style.height = pos.height
    this.coordinates = [ [ this.position.x, this.position.x + this.width ], [ this.position.y, this.position.y + this.height ] ]
    this.div = div
  }
}
