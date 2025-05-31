import React, { useState } from 'react';
import React from 'react';

const LearningModules = () => <div><span>Learning Modules</span></div>;
const ProgressDashboard = () => <div><span>Progress Dashboard</span></div>;
const PracticeLab = () => <div><span>Practice Lab</span></div>;
const ModuleAssessment = () => <div><span>Module Assessment</span></div>;

// Add CSS: .mobile-converted { padding: 10px; margin: 5px; }
export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <ProgressDashboard />;
      case 'modules':
        return <LearningModules />;
      case 'practice':
        return <PracticeLab />;
      case 'assessment':
        return <ModuleAssessment />;
      default:
        return <ProgressDashboard />;
    }
  };

  return (
    <div className="mobile-converted">
      <span className="mobile-converted">🎓 AI Learning Companion</span>
      
      <div className="mobile-converted">
        <button 
          style={["mobile-converted", currentPage === 'dashboard' && "mobile-converted"]}
          onPress={() => setCurrentPage('dashboard')}
        >
          <span className="mobile-converted">📊 Dashboard</span>
        </button>
        <button 
          style={["mobile-converted", currentPage === 'modules' && "mobile-converted"]}
          onPress={() => setCurrentPage('modules')}
        >
          <span className="mobile-converted">📚 Modules</span>
        </button>
        <button 
          style={["mobile-converted", currentPage === 'practice' && "mobile-converted"]}
          onPress={() => setCurrentPage('practice')}
        >
          <span className="mobile-converted">🧪 Practice</span>
        </button>
        <button 
          style={["mobile-converted", currentPage === 'assessment' && "mobile-converted"]}
          onPress={() => setCurrentPage('assessment')}
        >
          <span className="mobile-converted">📝 Assessment</span>
        </button>
      </div>

      <div className="mobile-converted" style={{overflowY: "auto"}}>
        {renderPage()}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#1e293b',
  },
  navigation: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  navButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    backgroundColor: '#e2e8f0',
    borderRadius: 12,
    alignItems: 'center',
  },
  activeNav: {
    backgroundColor: '#3b82f6',
  },
  navText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});