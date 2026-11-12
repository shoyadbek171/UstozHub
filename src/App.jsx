import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { Marketplace } from './pages/Marketplace';
import { StudentPanel } from './pages/StudentPanel';
import { InstructorStudio } from './pages/InstructorStudio';
import { AcademyErp } from './pages/AcademyErp';
import { SuperAdmin } from './pages/SuperAdmin';

function App() {
  const [currentMode, setCurrentMode] = useState('marketplace');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');

  // Real User State (Kirish va ro'yxatdan o'tishni boshqarish)
  const [user, setUser] = useState(null); // null yoki { name, email, role }

  // Auth Modal State
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('login');

  const handleOpenAuth = (tab) => {
    setAuthTab(tab);
    setIsAuthOpen(true);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col justify-between font-sans">
      <Navbar 
        currentMode={currentMode} 
        setCurrentMode={setCurrentMode} 
        search={search} 
        setSearch={setSearch} 
        onOpenAuth={handleOpenAuth}
        user={user}
        onLogout={handleLogout}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto p-6">
        {currentMode === 'marketplace' && (
          <Marketplace 
            search={search} 
            setSearch={setSearch} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        )}
        {currentMode === 'talaba' && <StudentPanel />}
        {currentMode === 'studio' && <InstructorStudio />}
        {currentMode === 'erp' && <AcademyErp />}
        {currentMode === 'admin' && <SuperAdmin />}
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialTab={authTab}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;