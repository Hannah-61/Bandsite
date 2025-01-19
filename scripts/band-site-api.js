class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }
//post new comments
    async postComment(newComment) {
        try {
            const response = await axios.post(`${this.baseURL}comments?api_key=${this.apiKey}`, newComment, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            return response.data;

        } catch(error) {
            console.error('Unable to post comment:', error);
        }

    };
//get comments
    async getComments() {
        try {
            const response = await axios.get(`${this.baseURL}comments?api_key=${this.apiKey}`);
            const comments = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            return comments;

        } catch (error) {
            console.error('Failed to retreive comments:', error);
        }
    };
//get shows
    async getShows() {
        try {
            const shows = await axios.get(`${this.baseURL}showdates?api_key=${this.apiKey}`);
            return shows.data
            
        } catch(error) {
            console.error('Unable to retrieve show information:', error);
        }
    };
//like comment
    async likeComment(id) {
        try {
            const response = await axios.put(`${this.baseURL}comments/${id}/like?api_key=${this.apiKey}`);
            return response.data;

        } catch (error) {
            console.error('Unable to like comment:', error);
        }
    }
//delete comment
    async deleteComment(id) {
        try {
            const response = await axios.delete(`${this.baseURL}comments/${id}?api_key=${this.apiKey}`);
            return response.data;

        } catch (error) {
            console.error('Unable to delete comment:', error);
        }
    }

    
}

export default BandSiteApi;