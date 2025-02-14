class MarvelService {
  _apiBase = 'https://gateway.marvel.com/v1/public/'
  _apiKey= 'a71ab3a4eb184352ad9b2f923361857c'

  getResource = async(url) => {
    let res = await fetch(url)
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  getAllCharacters = async() => {
    const res = await this.getResource(`${this._apiBase}characters?apikey=${this._apiKey}&limit=9&offset=210`)
    return res.data.results.map(this._transformCharacter)
  }

  getCharacter = async(id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)
    return this._transformCharacter(res.data.results[0])
  }

  _transformCharacter = (char) => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url
    }
  }
}

export default MarvelService