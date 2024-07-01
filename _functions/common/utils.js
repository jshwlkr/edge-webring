let fs = require("fs");
let path = require("path");
let members = [];

fs.readdirSync('./_data/members').forEach(function(file) {
  let contents = require(path.resolve('./_data/members/' + file));
  members.push(contents);
});

members.sort((a, b) => {
    return a.date > b.date ? 1 : -1;
})

export const redirect = site => {
    const statusMessage = `redirecting to: ${site.website}`
    console.log(statusMessage)

    return {
        statusCode: 303,
        headers: { Location: site.website },
        body: statusMessage
    }
}

export const getIndex = website =>
    website ? members.findIndex(site => website.includes(site.website)) : -1

export const getNext = website => {
    const index = getIndex(website)
    if (index !== -1) {
        const nextIndex = index < members.length - 1 ? index + 1 : 0
        return members[nextIndex]
    }
    console.log('referrer position not found.')
    return null
}

export const getPrevious = website => {
    const index = getIndex(website)
    if (index !== -1) {
        const prevIndex = index > 0 ? index - 1 : members.length - 1
        return members[prevIndex]
    }
    console.log('referrer position not found.')
    return null
}

export const getRandom = website => {
    const selection = website
        ? members.filter(site => !website.includes(site.website))
        : members
    const randomIndex = Math.floor(Math.random() * selection.length)
    return selection[randomIndex]
}
