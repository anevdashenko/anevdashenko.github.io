const SESSIONS_STARTED = 'sessions_started';
const WARNING_MESSAGE = 'several_tabs_warning';

function SessionsHelper() {
    try {
        this.sessions = parseInt(localStorage.getItem(SESSIONS_STARTED)) || 0;
    } catch (error) {
        this.sessions = 0;
    }

    this.messageSent = false;

    this.changeSessions = function(delta) {
        try {
            const sessions = parseInt(localStorage.getItem(SESSIONS_STARTED)) || 0;
            this.sessions = sessions + delta;
        } catch (error) {
            this.sessions = delta;
        }

        try {
            localStorage.setItem(SESSIONS_STARTED, this.sessions);
        } catch (error) {}

        this.messageSent = false;
    }

    this.checkSessions = function() {
        if (this.messageSent) {
            return;
        }

        try {
            const sessions = parseInt(localStorage.getItem(SESSIONS_STARTED)) || 0;

            if (this.sessions != sessions) {
                JsToDef.send(WARNING_MESSAGE);
                this.messageSent = true;
            }
        } catch (error) {}
    }

    this.changeSessions(1);


    window.addEventListener('unload', () => {
        this.changeSessions(-1);
    });

    window.addEventListener('storage', () => {
        this.checkSessions();
    });
}
