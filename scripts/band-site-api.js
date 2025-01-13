const API_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
const API_KEY = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"; // Replace with your API key

export default class BandSiteApi {
  /**
   * Fetch comments from the API
   * @returns {Promise<Array>} Array of comment objects
   */
  static async getComments() {
    try {
      const response = await axios.get(`${API_URL}/comments?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching comments:", error);
      throw error;
    }
  }

  /**
   * Post a new comment to the API
   * @param {Object} commentData - The new comment object { name, comment }
   * @returns {Promise<Object>} The newly created comment object
   */
  static async postComment(commentData) {
    try {
      const response = await axios.post(
        `${API_URL}/comments?api_key=${API_KEY}`,
        commentData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error posting comment:", error);
      throw error;
    }
  }

  /**
   * Like a specific comment by ID
   * @param {string} commentId - The ID of the comment to like
   * @returns {Promise<void>}
   */
  static async likeComment(commentId) {
    try {
      await axios.put(`${API_URL}/comments/${commentId}/like?api_key=${API_KEY}`);
    } catch (error) {
      console.error("Error liking comment:", error);
      throw error;
    }
  }

  /**
   * Delete a specific comment by ID
   * @param {string} commentId - The ID of the comment to delete
   * @returns {Promise<void>}
   */
  static async deleteComment(commentId) {
    try {
      await axios.delete(`${API_URL}/comments/${commentId}?api_key=${API_KEY}`);
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw error;
    }
  }

  /**
   * Fetch show dates from the API
   * @returns {Promise<Array>} Array of show objects
   */
  static async getShowDates() {
    try {
      const response = await axios.get(`${API_URL}/showdates?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching show dates:", error);
      throw error;
    }
  }
}
