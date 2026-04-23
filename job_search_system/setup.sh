#!/bin/bash
# Setup script for Job Search System

echo "=========================================="
echo "Job Search System - Setup"
echo "=========================================="
echo ""

# Check Python version
echo "Checking Python version..."
python3 --version

if [ $? -ne 0 ]; then
    echo "❌ Python 3 is not installed. Please install Python 3.8+ first."
    exit 1
fi

# Create virtual environment
echo ""
echo "Creating virtual environment..."
python3 -m venv venv

if [ $? -ne 0 ]; then
    echo "❌ Failed to create virtual environment."
    exit 1
fi

echo "✓ Virtual environment created"

# Activate virtual environment
echo ""
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo ""
echo "Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo ""
echo "Installing dependencies..."
pip install -r requirements.txt

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies."
    exit 1
fi

echo "✓ Dependencies installed"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "Creating .env file..."
    cp .env.example .env
    echo "✓ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env file and add your email credentials!"
    echo "   Email: your_email@gmail.com"
    echo "   Password: Generate App Password at https://myaccount.google.com/apppasswords"
else
    echo ""
    echo "✓ .env file already exists"
fi

# Create directories
echo ""
echo "Creating data directories..."
mkdir -p data logs templates
echo "✓ Directories created"

# Run test
echo ""
echo "Running quick test..."
python main.py --analyze-resume

if [ $? -ne 0 ]; then
    echo ""
    echo "⚠️  Test failed. Please check the error messages above."
else
    echo ""
    echo "=========================================="
    echo "✓ Setup complete!"
    echo "=========================================="
    echo ""
    echo "Next steps:"
    echo "1. Edit .env file with your email credentials"
    echo "2. Run: python main.py --analyze-resume"
    echo "3. Run: python main.py --collect-contacts 10"
    echo "4. Run: python main.py --stats"
    echo ""
    echo "See README.md for full documentation."
    echo ""
fi
