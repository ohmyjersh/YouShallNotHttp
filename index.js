module.exports = () => {
    if(!window.location.protocol.includes('https'))
    {
        window.location.href = `https:${window.location.href.substring(window.location.href.indexOf(':')+1)}`;
    }
}