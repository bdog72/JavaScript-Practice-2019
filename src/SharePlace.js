//
//
//
import { Modal } from './UI/Modal';
import { Map } from './UI/Map';

import { getCoordsFromAddress } from './Utility/Location';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  selectPlace(coordinates) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler() {
    console.log('click');

    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - Please use a more modern browser or manually enter a address'
      );
      return;
    }

    const modal = new Modal(
      'loading-modal-content',
      'Loading location - Please wait!'
    );
    modal.show();

    navigator.geolocation.getCurrentPosition(
      successResult => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude
        };
        this.selectPlace(coordinates);
      },
      error => {
        modal.hide();
        alert('Could not locate you - Please enter a address manually');
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;

    if (!address || address.trim().length === 0) {
      alert('Invalid address entered - Please try again!');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait'
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates);
    } catch (error) {
      alert(error.message);
    }
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
