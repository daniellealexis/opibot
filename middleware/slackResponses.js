/**
 * This file is for getting formatted Slack responses
 *
 * "Turn on entity resolution for usernames, channels, and links by flipping the toggle in your slash command's configuration dialog. Always work with user IDs and channel IDs."
 */



module.exports = {
    createdTeam() {

    },

    createdCategory(categoryName) {

    },

    showAllCategories(categories) {

    },

    showSuggestion(text, categoryName, userId) {
        return {
            response_type: "ephemeral",
            text: `Get suggestion from ${text} category`,
        };
    },

    submittedSuggestion(text) {
        return {
            response_type: "ephemeral",
            text: `Submit suggestion on ${text} category`,
        };
    },

    showAllCommands() {
        return {
            response_type: "ephemeral",
            text: "idk",
        };
    }, 

    genericError() {
        return {
            response_type: "ephemeral",
            text: "Sorry, there was an error",
        };
    }
};
