#!/bin/bash

# Start SMTP Backend Server
echo "🚀 Starting SMTP Backend Server..."
cd backend
npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start Frontend Development Server
echo "🎨 Starting Frontend Development Server..."
cd ..
npm run dev &
FRONTEND_PID=$!

echo "✅ Both servers are running!"
echo "📧 SMTP Backend: http://localhost:3001"
echo "🎨 Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to cleanup on exit
cleanup() {
    echo "🛑 Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Trap Ctrl+C
trap cleanup INT

# Wait for either process to exit
wait
