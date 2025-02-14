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

  getAllCharacters = () => {
    return this.getResource(`${this._apiBase}characters?apikey=${this._apiKey}&limit=9&offset=210`)
  }

  getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)
  }
}

export default MarvelService