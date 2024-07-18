
const convertSecondsToTimeStr = (seconds) => {
    
    const minutes = `${(seconds / 60).toFixed(2)}`;
    return minutes.replace('.',':')
};

const genreImages = {
    "All Songs": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fcolorful-music-note-with-black-background_447899-6143.jpg&f=1&nofb=1&ipt=43371f61ac3fc685e065b95763c3273eced43163aea138b3229a92367200f8e9&ipo=images",
    "Alternative": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb3%2Faf%2F2f%2Fb3af2fac92c4ba54420fde905599f312.jpg&f=1&nofb=1&ipt=f3ac97c0520162228e689f57e8e7c42ee5279b6c083513710ea650dc04a3d6d7&ipo=images",
    "Rock/Metal": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn-images.audioaddict.com%2F1%2F5%2Fd%2Fb%2Fa%2Fa%2F15dbaa1f6a26c234d4977f10e9ea8808.png&f=1&nofb=1&ipt=1dc48f6a0727065ebfb6e8b6ca45b25327a4769383506167e2d3a854b32b69b4&ipo=images",
    "Latin": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1316367.jpg&f=1&nofb=1&ipt=751b38986c817c1c8d5b6689425a9fd8e3b2a17ed27bf0d93d186ac7ddd97cd4&ipo=images",
    "Pop/K-Pop": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.liveabout.com%2Fthmb%2Fj7o7VNZ8mmJwha2M0FO6Sz9H46w%3D%2F1500x1500%2Ffilters%3Afill(auto%2C1)%2Fpop-music-57bce3863df78c87634ea806.jpg&f=1&nofb=1&ipt=bab0d1eb553830c03c2fc3b9a69e07be4bcd1b4ab1a5a8edd5b5c7d6ecdb1658&ipo=images",
    "Hip-Hop/Rap": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2c%2F0a%2F93%2F2c0a938abdbf1482743e04a470fa4d4d.jpg&f=1&nofb=1&ipt=7d9952286a4fd099888581b8129af3f5f8946cbf6529265fce9671cc6339e99f&ipo=images",
    "Country": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F236352.jpg&f=1&nofb=1&ipt=ea5372853eaa4356adbc0bd1ecfb928b1c3a710a8dc8822e79152205c2460ad0&ipo=images"
}

export { convertSecondsToTimeStr, genreImages }


