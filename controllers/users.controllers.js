const supabaseClient = require("@supabase/supabase-js")
const supabase = supabaseClient.createClient("https://nhwodezjrriyzswfkdmc.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5od29kZXpqcnJpeXpzd2ZrZG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MzMxNDgsImV4cCI6MjAzMTIwOTE0OH0.OrWz3ifp9b9DKcl8u5mOpGEa536hAZlyaxrO8LaeT_Q")

module.exports = {
    getAllUsers: async (req, res) => {
        const { data, error } = await supabase.from("users").select()
        return res.send(data)
    },

    addUser: async (req, res) => {
        const user = req.body
        const { error } = await supabase
        .from("users")
        .insert(user)
        if(error) return res.send(error)
        return res.sendStatus(201)
    },
    
    deleteUser: async (req, res) => {
        const { error } = await supabase
            .from("users")
            .delete()
            .eq("id", req.params.id)
            
        if(error) return res.send(error)
        return res.sendStatus(200)
    },

    updateUser: async (req, res) => {
        const user = req.body
        const { error } = await supabase
            .from("users")
            .update(user)
            .eq("id", req.params.id)

            if(error) return res.send(error)
                return res.sendStatus(200)
    }
}