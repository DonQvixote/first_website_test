console.log('hi')

d3.json("data.json").then(d=> Object.entries(d).forEach(([key,value]) => {
    d3.select("h1").append("h5").text(`${key}: ${value}`)
}))




