import React from 'react';

const SwapiService  = () => {

    _apiBase = 'https://swapi.co/api';
  
    async const getResource = (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    async const getAllPeople = () => {
      const res = await getResource(`/people/`);
      return res.results;
    };
  
    const getPerson = (id) => {
      return getResource(`/people/${id}/`);
    };
  
    async const getAllPlanets = () => {
      const res = await getResource(`/planets/`);
      return res.results;
    };
  
    const getPlanet = (id) => {
      return getResource(`/planets/${id}/`);
    };
  
    async const getAllStarships = () => {
      const res = await getResource(`/starships/`);
      return res.results;
    };
  
    const getStarship = (id) => {
      return getResource(`/starships/${id}/`);
    };
  };

  export default SwapiService;