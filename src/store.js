const uuid = require('uuid/v4')


const bookmarks = [{
    id: uuid(),
    url: "http://iamabookmark.com",
    title: 'Task One',
    description: 'This is card one',
    rating: 4.5,

}]

module.exports = { bookmarks }