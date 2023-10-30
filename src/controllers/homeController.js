const getHomepage = (req, res) => {

    res.send('Hello World! this is recbin')
}

const getimg = (req, res) => {
    res.render('sample.ejs')
}

const getABC = (req, res) => {
    res.send('Show alphabet document')
}
module.exports = {
    getHomepage, getABC, getimg
}