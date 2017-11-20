/**
 * This file is for getting formatted Slack responses
 *
 * "Turn on entity resolution for usernames, channels, and links by flipping the toggle in your slash command's configuration dialog. Always work with user IDs and channel IDs."
 */



module.exports = {
    createdTeam() {

    },

    createdList(listName) {

    },

    showAllLists(lists) {

    },

    showSuggestion(text, listName, userId) {

    },

    submittedSuggestion() {

    },

    showAllCommands() {

    },

    genericError() {
        return JSON.stringify({
            response_type: "ephemeral",
            text: "Sorry, there was an error",
        });
    }
};
