"use strict"

var restaurants = [
    {
        name: 'Restaurant A',
        longitude: 123.456,
        latitude: 78.910
    },
    {
        name: 'Restaurant B',
        longitude: 12.345,
        latitude: 67.890
    },
    {
        name: 'Restaurant C',
        longitude: 45.678,
        latitude: 90.123
    }
];

restaurants.forEach(function (restaurant) {
    var marker = new mapboxgl.Marker()
        .setLngLat([restaurant.longitude, restaurant.latitude])
        .addTo(map);

    var popup = new mapboxgl.Popup()
        .setHTML('<h3>' + restaurant.name + '</h3>')
        .addTo(map);

    marker.setPopup(popup);
});
