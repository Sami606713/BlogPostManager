import Blog from "../Models/blogModel.js"

// get blog posts
const GetBLogs = async (req,res)=>{
    const blogs = await Blog.find()

    res.status(200).json({
        success:true,
        message:"All blog posts",
        blogs:blogs
    })
}

// Get by id
const GetById = async(req,res)=>{
    const id = req.params.id
    const blog = await Blog.findById({"_id":id})

    res.status(200).json({
            success:true,
            message:"Blog post by id",
            blog:blog
        })
}

// Create blog
const CreateBlog = async (req,res)=>{
    const data = req.body
    console.log(data)

    const blog = new Blog({
        title:data.title,
        description:data.description,
    })

    await blog.save();
    res.status(201).send("Blog post created successfully");
}

// Update blog
const UpdateBlog = async(req,res)=>{
    const id = req.params.id
    const data = req.body

    const updateBlog =await Blog.findByIdAndUpdate({"_id":id},data,{new:true})
    res.status(200).json({
        success:true,
        message:"Blog post updated successfully",
        blog:updateBlog
    })
}

// Delete blog
const DeleteBlog = async (req,res)=>{
    const id =req.params.id
    
    const bolg = await Blog.findByIdAndDelete({"_id":id})
    res.status(200).json({
        success:true,
        message:"Blog post deleted successfully",
        blog:bolg
    })
}

export {CreateBlog,UpdateBlog,GetBLogs,GetById,DeleteBlog}
