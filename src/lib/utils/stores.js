import { writable } from 'svelte/store';

// Store music player volume.

const volume = writable(0);

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const updateLocalStorage = debounce((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('volume', value.toString());
  }
}, 300);

let initialVolumeSet = false;

volume.subscribe((value) => {
  if (!initialVolumeSet && typeof window !== 'undefined') {
    const storedVolume = localStorage.getItem('volume');
    volume.set(storedVolume !== null ? Number(storedVolume) : 50);
    initialVolumeSet = true;
  }
});

volume.subscribe(updateLocalStorage);

export default volume;

// ...