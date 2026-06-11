import * as userService from "../services/user.services.js";

export const getUsers = async (req, res, next) => {
	try {
		const users = await userService.getUsers();
		res.json(users);
	} catch (error) {
		next(error);
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await userService.getUser(Number(req.params.id));
		res.json(user);
	} catch (error) {
		next(error);
	}
};

export const createUser = async (req, res, next) => {
	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		next(error);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		const user = await userService.deleteUser(Number(req.params.id));
		res.json({
			message: "User deleted",
			user,
		});
	} catch (error) {
		next(error);
	}
};

export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    const result = await authService.refresh(refreshToken);

    res.status(200).json(result);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
export const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body; 
    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token talab qilinadi" });
    }

    const result = await userService.refresh(refreshToken);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const register = async (req, res, next) => {
try {
    console.log("🔍 Request body:", req.body)
    console.log("🔍 Headers:", req.headers)
    
    const result = await userService.register(req.body)
    console.log("✅ Register success:", result)
    
    res.status(201).json(result)
  } catch (error) {
    console.error("❌ Register error:", error)
    console.error("❌ Error stack:", error.stack)
    
    // Xatolikni batafsil yuborish
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    })
  }
}

export const login = async (req, res, next) => {
	try {
		const result = await userService.login(req.body)
		res.json(result)
	} catch (error) {
		next(error)
	}
}