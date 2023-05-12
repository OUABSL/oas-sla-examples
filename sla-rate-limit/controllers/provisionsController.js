export function getprovisions(_, res) {
    res.send([{
        disposal_number : 1,
        province : "Sevilla"      
        }])
}

export function findByid(_, res) {
    res.send({
        disposal_number : 1,
        province : "Sevilla"      
        })
}


