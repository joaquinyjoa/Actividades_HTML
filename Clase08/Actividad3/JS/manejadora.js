const manejarFetchSimple = async (url) => {
    return await fetch(url)
        .then(manejarErrorSimple);
};

const manejarErrorSimple = (res) => {
    if (!res.ok)
        throw new Error(res.statusText);
    return res;
};
