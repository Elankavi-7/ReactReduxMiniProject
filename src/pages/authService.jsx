// Enhanced mock user database with better profiles
let mockUsers = [
  { 
    id: 1, 
    email: 'user@example.com', 
    password: 'password', 
    name: 'John Doe', 
    avatar: '👤',
    joinDate: '2024-01-15',
    bio: 'Digital enthusiast passionate about web technologies'
  },
  { 
    id: 2, 
    email: 'admin@example.com', 
    password: 'admin123', 
    name: 'Admin User', 
    avatar: '👨‍💼',
    joinDate: '2024-01-10',
    bio: 'System administrator and tech lead'
  },
];

// Helper to generate unique ID
const generateId = () => Math.max(...mockUsers.map(u => u.id), 0) + 1;

export const authService = {
  // Login user
  async login(email, password) {
    try {
      console.log('🔐 Login attempt:', email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = mockUsers.find(u => u.email === email && u.password === password);
      
      if (user) {
        const { password: _, ...userWithoutPassword } = user;
        console.log('✅ Login successful:', userWithoutPassword);
        return { success: true, user: userWithoutPassword };
      } else {
        console.log('❌ Login failed: Invalid credentials');
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      console.error('🚨 Login error:', error);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  },

  // Register new user
  async register(userData) {
    try {
      console.log('📝 Registration attempt:', userData.email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const existingUser = mockUsers.find(u => u.email === userData.email);
      if (existingUser) {
        console.log('❌ Registration failed: User exists');
        return { success: false, error: 'User already exists with this email' };
      }
      
      const newUser = {
        id: generateId(),
        name: userData.name,
        email: userData.email,
        password: userData.password,
        avatar: '👤',
        joinDate: new Date().toISOString().split('T')[0],
        bio: 'New member of our community'
      };
      
      console.log('✅ Creating new user:', newUser);
      mockUsers.push(newUser);
      
      const { password: _, ...userWithoutPassword } = newUser;
      console.log('✅ Registration successful:', userWithoutPassword);
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.error('🚨 Registration error:', error);
      return { success: false, error: 'Registration failed. Please try again.' };
    }
  },

  // Update user profile
  async updateProfile(userId, updates) {
    try {
      console.log('🔄 Profile update for user:', userId, updates);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userIndex = mockUsers.findIndex(u => u.id === userId);
      if (userIndex !== -1) {
        mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates };
        const { password: _, ...updatedUser } = mockUsers[userIndex];
        console.log('✅ Profile updated:', updatedUser);
        return { success: true, user: updatedUser };
      } else {
        console.log('❌ Profile update failed: User not found');
        return { success: false, error: 'User not found' };
      }
    } catch (error) {
      console.error('🚨 Profile update error:', error);
      return { success: false, error: 'Profile update failed' };
    }
  },

  // Get user by ID (for debugging)
  getUserById(userId) {
    return mockUsers.find(u => u.id === userId);
  },

  // Get all users (for debugging)
  getAllUsers() {
    return mockUsers.map(({ password, ...user }) => user);
  }
};