
function reset() {
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
    document.getElementById("C").value = "";
    document.getElementById("img01").style.display = "none";
}

function orderShownOns() {
    let c = document.getElementById("C");
    let str = c.value;
    str = (/Shown\s*on/i.test(str) === true) ? str.split(/Shown\s*on/i).pop() : str;
    let arr = str.match(/\w{4}-\w{4,8}-\w{2,4}/g)
    arr = (arr === null) ? arr = [] : arr.sort();
    c.value = arr.join("\n");
}

function compareShownons() {
    let b = document.getElementById("B").value.trim();
    let c = document.getElementById("C").value.trim();
    let img = document.getElementById("img01");
    //img.style.display = c === b ? "inline" : "none";
    img.style.display = "inline";
    img.src = c === b ? "smiley.gif" : "thinking.gif";
}

function getPartNumbers () {
    let str = document.getElementById("A").value;
    let parts = str.match(/\w{4}-\w{4,8}-\w{2,4}/g).sort().reverse();
    let seen = {};
    parts = parts.filter(part => seen.hasOwnProperty(getVariant(part)) ? false : seen[getVariant(part)] = true);
    document.getElementById("B").value = parts.sort().filter(x => x !== "").join("\n");
}

function getVariant(suffix){
    let str = suffix.trim().toUpperCase();
    let len = str.length;
    str = (str.slice(-1) === "W") ? str.slice(0, len-2) + "*" : str.slice(0, len-1) + "*";
    return str;
}