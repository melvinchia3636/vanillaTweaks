import axios from "axios";

const download = async (selected: {[key: string]: {[key: string]: any}[]}, type: string) => {
  if (JSON.stringify(selected) !== '{}') {
    const { data: { link, status } } = await axios({
      url: 'http://localhost:3001/download/'+type,
      method: "POST",
      data: selected,
    })
    if (status === "success") {
      const a = document.createElement('a');
      a.href = 'https://vanillatweaks.net'+link;
      a.download = link.split('/').pop();
      a.click();
    }
  }
}

export default download;