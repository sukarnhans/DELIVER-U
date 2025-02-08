document.getElementById('notificationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const items = document.getElementById('items').value;

    // Create a notification box
    const notificationBox = document.createElement('div');
    notificationBox.className = 'notification-box';

    notificationBox.innerHTML = `
        <div class="notification-title">${location}</div>
        <div class="notification-description">
            Items: ${items}
        </div>
        <div class="notification-timestamp">
            Date: ${date} <br>
            Time: ${time}
        </div>
        <div class="notification-contact">
            Posted by: ${name} <br>
            Contact: ${contact}
        </div>
    `;

    // Append the notification box to the container
    const notificationsContainer = document.getElementById('notifications-container');
    notificationsContainer.appendChild(notificationBox);

    // Clear the form
    document.getElementById('notificationForm').reset();

    // Calculate the time difference and set timeout to remove the notification
    const notificationTime = new Date(`${date}T${time}`);
    const currentTime = new Date();
    const timeDifference = notificationTime - currentTime;

    if (timeDifference > 0) {
        setTimeout(() => {
            notificationsContainer.removeChild(notificationBox);
        }, timeDifference);
    }
});