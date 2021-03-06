const repeatArray = (base,num) => Array.from( new Array(num) , () => base ).flat()

const genColor = (color,itemSize,numItems) => {
    if( Array.isArray(color[0]) ) {
        return color.map( set => genColor( set , itemSize , numItems/color.length ) ).flat()
    } else {
        if( color.length == (4*numItems) ) { return color }
        else if(  color.length == 3 ) { return repeatArray([...color,1],numItems) }
        else if(  color.length == 4 ) { return repeatArray(color,numItems) }
        else { throw new Error('invalid color \n' + color ) }
    }
}

const FormaBase = (vertices,color,colorNumItems,itemSize,numItems,tipo, translate = [0,0,0] , rot = [0,0,0] , rotStep = [0,0,0] , index , indexItemSize, indexNumItems , texCord , texCordItemSize ,texCordNumItems , texSrc ) => ({
    vertices,
    color : color ? genColor(color,itemSize,numItems) : null,
    colorNumItems: colorNumItems ?? null,
    itemSize,
    numItems,
    tipo,
    translate,
    rot,
    rotStep,
    index,
    indexItemSize,
    indexNumItems,
    texCord,
    texCordItemSize,
    texCordNumItems,
    texSrc,
})

export { FormaBase }
