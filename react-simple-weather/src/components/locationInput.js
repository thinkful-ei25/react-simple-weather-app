import React from 'react';

export default function LocationInput(props) {

  return (
    <div>
      <form onSubmit={e => { e.preventDefault(); props.onSubmit(e.target.zipcode.value) }}>
        <input type="text" name="zipcode" placeholder="ZipCode..." id="zipcode" />
        <button>GET WEATHER</button>
      </form>
    </div>
  );
}
