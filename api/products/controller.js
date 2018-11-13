const models = require("../models")

exports.getAll = (req, res) => {
    models.products
        .findAll()
        .then(products => {
            if (products === []) {
                res.send("data not fund")
            } else {
                res.send(products)
            }
        })
        .catch(err => res.send(err))
}

exports.post = (req, res) => {
    models.products
        .create(req.body)
        .then(product => res.send({
            message: "insert data success",
            data: product
        }))
        .catch(err => res.send(err))
}

exports.deleteOne = (req, res) => {
    models.products.findOne({ where: { id: req.params.id } })
        .then(product =>
            product.destroy()
                .then(result => res.send(result))
                .catch(err => res.send(err)))
        .catch(err => res.send(err))

    // models.products.destroy({
    //     where: { id: req.params.id }
    // }).then(result => {
    //     if (result === 1) {
    //         res.send("success")
    //     } else {
    //         res.send("failed")
    //     }
    // }).catch(err => res.send(err))
}

exports.deleteAll = (req, res) => {


    models.products.destroy({
        where: {},
        truncate: true
    }).then(result => {
        res.send("success")
    }).catch(err => res.send(err))
}

exports.search = (req, res) => {
    console.log(req.query)
    models.products.findAll({ where: req.query })
        .then(products => res.send(products))
        .catch(err => res.send(err))
}

exports.update = (req, res) => {
    models.products.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(result => res.send(result))
        .catch(err => res.send(err))
}