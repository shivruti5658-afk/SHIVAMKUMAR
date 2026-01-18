import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { ContactFormData } from '@/types/contact';

// Workflow-based feature categorization function
const categorizeFeaturesByWorkflow = (features: string[], projectTypes: string[], categories: string[]) => {
  const workflows: Record<string, string[]> = {
    'WORKFLOW 1: USER ENTRY & AUTHENTICATION': [],
    'WORKFLOW 2: USER PROFILE & CONTENT INTERACTION': [],
    'WORKFLOW 3: UI, RESPONSIVENESS & EXPERIENCE': [],
    'WORKFLOW 4: BACKEND, APIs & SYSTEM INTEGRATION': [],
    'WORKFLOW 5: E-COMMERCE & TRANSACTION FLOW': [],
    'WORKFLOW 6: CONTENT MANAGEMENT & PUBLISHING': [],
    'WORKFLOW 7: ANALYTICS, SEO & OPTIMIZATION': [],
    'OTHER FEATURES': []
  };

  features.forEach(feature => {
    const lowerFeature = feature.toLowerCase();
    
    // Workflow 1: Authentication related features
    if (lowerFeature.includes('login') || lowerFeature.includes('register') || lowerFeature.includes('auth') || 
        lowerFeature.includes('signup') || lowerFeature.includes('social') || lowerFeature.includes('password') ||
        lowerFeature.includes('authentication') || lowerFeature.includes('sign')) {
      workflows['WORKFLOW 1: USER ENTRY & AUTHENTICATION'].push(feature);
    }
    // Workflow 2: User Profile & Content Interaction
    else if (lowerFeature.includes('profile') || lowerFeature.includes('user') || lowerFeature.includes('role') ||
             lowerFeature.includes('permission') || lowerFeature.includes('content') || lowerFeature.includes('create') ||
             lowerFeature.includes('edit') || lowerFeature.includes('delete')) {
      workflows['WORKFLOW 2: USER PROFILE & CONTENT INTERACTION'].push(feature);
    }
    // Workflow 3: UI, Responsiveness & Experience
    else if (lowerFeature.includes('design') || lowerFeature.includes('theme') || lowerFeature.includes('dark') || 
             lowerFeature.includes('light') || lowerFeature.includes('responsive') || lowerFeature.includes('mobile') ||
             lowerFeature.includes('tablet') || lowerFeature.includes('desktop') || lowerFeature.includes('animation') ||
             lowerFeature.includes('transition') || lowerFeature.includes('ui') || lowerFeature.includes('ux')) {
      workflows['WORKFLOW 3: UI, RESPONSIVENESS & EXPERIENCE'].push(feature);
    }
    // Workflow 4: Backend, APIs & System Integration
    else if (lowerFeature.includes('api') || lowerFeature.includes('backend') || lowerFeature.includes('database') ||
             lowerFeature.includes('server') || lowerFeature.includes('integration') || lowerFeature.includes('rest') ||
             lowerFeature.includes('graphql') || lowerFeature.includes('security') || lowerFeature.includes('token') ||
             lowerFeature.includes('encryption') || lowerFeature.includes('cms')) {
      workflows['WORKFLOW 4: BACKEND, APIs & SYSTEM INTEGRATION'].push(feature);
    }
    // Workflow 5: E-Commerce & Transaction Flow
    else if (lowerFeature.includes('payment') || lowerFeature.includes('cart') || lowerFeature.includes('checkout') ||
             lowerFeature.includes('ecommerce') || lowerFeature.includes('shop') || lowerFeature.includes('product') ||
             lowerFeature.includes('order') || lowerFeature.includes('catalog') || lowerFeature.includes('transaction')) {
      workflows['WORKFLOW 5: E-COMMERCE & TRANSACTION FLOW'].push(feature);
    }
    // Workflow 6: Content Management & Publishing
    else if (lowerFeature.includes('blog') || lowerFeature.includes('media') || lowerFeature.includes('upload') ||
             lowerFeature.includes('versioning') || lowerFeature.includes('language') || lowerFeature.includes('publishing') ||
             lowerFeature.includes('content management')) {
      workflows['WORKFLOW 6: CONTENT MANAGEMENT & PUBLISHING'].push(feature);
    }
    // Workflow 7: Analytics, SEO & Optimization
    else if (lowerFeature.includes('analytics') || lowerFeature.includes('seo') || lowerFeature.includes('tracking') ||
             lowerFeature.includes('monitoring') || lowerFeature.includes('report') || lowerFeature.includes('metrics') ||
             lowerFeature.includes('testing') || lowerFeature.includes('optimization') || lowerFeature.includes('dashboard') ||
             lowerFeature.includes('google analytics')) {
      workflows['WORKFLOW 7: ANALYTICS, SEO & OPTIMIZATION'].push(feature);
    }
    // Uncategorized features
    else {
      workflows['OTHER FEATURES'].push(feature);
    }
  });

  return workflows;
};

// Priority mapping function
const getPriorityLevel = (priority?: string) => {
  switch (priority?.toLowerCase()) {
    case 'high': return 'High';
    case 'medium': return 'Medium';
    case 'low': return 'Low';
    default: return 'Medium';
  }
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    fontSize: 12,
  },
  coverPage: {
    padding: 60,
    textAlign: 'center',
    backgroundColor: '#f8fafc',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 40,
  },
  documentInfo: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 60,
  },
  header: {
    marginBottom: 30,
    borderBottom: '2px solid #3b82f6',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1e40af',
    borderBottom: '2px solid #e5e7eb',
    paddingBottom: 5,
  },
  table: {
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 4,
  },
  tableHeader: {
    backgroundColor: '#f1f5f9',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    padding: 8,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
    flexDirection: 'row',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  tableCell: {
    padding: 8,
    fontSize: 11,
    color: '#1f2937',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  tableCellLast: {
    padding: 8,
    fontSize: 11,
    color: '#1f2937',
  },
  featureNameCell: {
    width: '35%',
    padding: 8,
    fontSize: 11,
    color: '#1f2937',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  expectationCell: {
    width: '45%',
    padding: 8,
    fontSize: 11,
    color: '#1f2937',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  priorityCell: {
    width: '20%',
    padding: 8,
    fontSize: 11,
    color: '#1f2937',
    textAlign: 'center',
  },
  priorityHigh: {
    color: '#dc2626',
    fontWeight: 'bold',
  },
  priorityMedium: {
    color: '#f59e0b',
    fontWeight: 'bold',
  },
  priorityLow: {
    color: '#059669',
    fontWeight: 'bold',
  },
  overviewTable: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 4,
  },
  overviewLabel: {
    width: '30%',
    padding: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151',
    backgroundColor: '#f8fafc',
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  overviewValue: {
    width: '70%',
    padding: 10,
    fontSize: 12,
    color: '#1f2937',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    borderTop: '1px solid #e5e7eb',
    paddingTop: 10,
  },
  confidentialityBox: {
    backgroundColor: '#fef3c7',
    border: '1px solid #fbbf24',
    borderRadius: 4,
    padding: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  confidentialityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 8,
  },
  confidentialityText: {
    fontSize: 11,
    color: '#78350f',
    lineHeight: 1.4,
  },
  notesSection: {
    backgroundColor: '#f0f9ff',
    border: '1px solid #0ea5e9',
    borderRadius: 4,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  notesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#075985',
    marginBottom: 8,
  },
  workflowDescription: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 15,
    fontStyle: 'italic',
    lineHeight: 1.4,
  },
  workflowTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },
  notesText: {
    fontSize: 11,
    color: '#0c4a6e',
    lineHeight: 1.4,
  },
});

// Workflow Feature Table Component
const WorkflowFeatureTable = ({ title, description, features, priority }: { 
  title: string; 
  description: string; 
  features: string[]; 
  priority?: string 
}) => {
  if (features.length === 0) return null;
  
  const priorityStyle = priority === 'High' ? styles.priorityHigh : 
                        priority === 'Medium' ? styles.priorityMedium : 
                        styles.priorityLow;

  return (
    <View style={{ marginBottom: 25 }}>
      <Text style={styles.workflowTitle}>{title}</Text>
      <Text style={styles.workflowDescription}>{description}</Text>
      <View style={styles.table}>
        <View style={[styles.tableHeader, styles.tableRow]}>
          <Text style={styles.featureNameCell}>Feature Name</Text>
          <Text style={styles.expectationCell}>What Client Expects</Text>
          <Text style={styles.priorityCell}>Priority</Text>
        </View>
        {features.map((feature, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.featureNameCell}>{feature}</Text>
            <Text style={styles.expectationCell}>Implementation of {feature.toLowerCase()} functionality</Text>
            <Text style={[styles.priorityCell, priorityStyle]}>{priority || 'Medium'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export const ProjectRequirementPDF = (data: ContactFormData) => {
  const categorizedFeatures = categorizeFeaturesByWorkflow(data.features || [], data.projectTypes || [], data.categories || []);
  const priorityLevel = getPriorityLevel(data.priority);

  // Workflow descriptions
  const workflowDescriptions = {
    'WORKFLOW 1: USER ENTRY & AUTHENTICATION': 'This category defines how users enter system, create accounts, and authenticate securely. These features are mandatory for any user-based platform and form foundation of all other workflows.',
    'WORKFLOW 2: USER PROFILE & CONTENT INTERACTION': 'This category covers what users can do after logging in, including interacting with or generating content.',
    'WORKFLOW 3: UI, RESPONSIVENESS & EXPERIENCE': 'This category ensures application is visually usable, accessible, and device-independent.',
    'WORKFLOW 4: BACKEND, APIs & SYSTEM INTEGRATION': 'This category defines how frontend communicates with backend systems, including data exchange and security.',
    'WORKFLOW 5: E-COMMERCE & TRANSACTION FLOW': 'This category applies only if monetization or product selling is required.',
    'WORKFLOW 6: CONTENT MANAGEMENT & PUBLISHING': 'This category defines how static and dynamic content is created and managed.',
    'WORKFLOW 7: ANALYTICS, SEO & OPTIMIZATION': 'This category helps client measure performance and improve visibility.'
  };

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.coverPage}>
        <Text style={styles.mainTitle}>Product Requirements Document</Text>
        <Text style={styles.subtitle}>Workflow-Based Feature Categorization for Web Application</Text>
        
        <View style={styles.overviewTable}>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Client Name</Text>
            <Text style={styles.overviewValue}>{data.name}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Email</Text>
            <Text style={styles.overviewValue}>{data.email}</Text>
          </View>
          {data.phone && (
            <View style={styles.tableRow}>
              <Text style={styles.overviewLabel}>Phone</Text>
              <Text style={styles.overviewValue}>{data.phone}</Text>
            </View>
          )}
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Country</Text>
            <Text style={styles.overviewValue}>{data.country || 'India'}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Project Type</Text>
            <Text style={styles.overviewValue}>Web Application</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Website Category</Text>
            <Text style={styles.overviewValue}>Portfolio / Personal Website</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Priority Level</Text>
            <Text style={styles.overviewValue}>{priorityLevel}</Text>
          </View>
        </View>

        <Text style={styles.documentInfo}>
          Document generated on {new Date().toLocaleDateString()} • Confidential & Proprietary
        </Text>
      </Page>

      {/* Main Content Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Workflow-Based Feature Breakdown</Text>
        </View>

        {/* Workflow Categories */}
        <WorkflowFeatureTable 
          title="WORKFLOW 1: USER ENTRY & AUTHENTICATION"
          description={workflowDescriptions['WORKFLOW 1: USER ENTRY & AUTHENTICATION']}
          features={categorizedFeatures['WORKFLOW 1: USER ENTRY & AUTHENTICATION']} 
          priority="High"
        />
        
        <WorkflowFeatureTable 
          title="WORKFLOW 2: USER PROFILE & CONTENT INTERACTION"
          description={workflowDescriptions['WORKFLOW 2: USER PROFILE & CONTENT INTERACTION']}
          features={categorizedFeatures['WORKFLOW 2: USER PROFILE & CONTENT INTERACTION']} 
          priority="High"
        />
        
        <WorkflowFeatureTable 
          title="WORKFLOW 3: UI, RESPONSIVENESS & EXPERIENCE"
          description={workflowDescriptions['WORKFLOW 3: UI, RESPONSIVENESS & EXPERIENCE']}
          features={categorizedFeatures['WORKFLOW 3: UI, RESPONSIVENESS & EXPERIENCE']} 
          priority="High"
        />
        
        <WorkflowFeatureTable 
          title="WORKFLOW 4: BACKEND, APIs & SYSTEM INTEGRATION"
          description={workflowDescriptions['WORKFLOW 4: BACKEND, APIs & SYSTEM INTEGRATION']}
          features={categorizedFeatures['WORKFLOW 4: BACKEND, APIs & SYSTEM INTEGRATION']} 
          priority="High"
        />
        
        <WorkflowFeatureTable 
          title="WORKFLOW 5: E-COMMERCE & TRANSACTION FLOW"
          description={workflowDescriptions['WORKFLOW 5: E-COMMERCE & TRANSACTION FLOW']}
          features={categorizedFeatures['WORKFLOW 5: E-COMMERCE & TRANSACTION FLOW']} 
          priority="High"
        />
        
        <WorkflowFeatureTable 
          title="WORKFLOW 6: CONTENT MANAGEMENT & PUBLISHING"
          description={workflowDescriptions['WORKFLOW 6: CONTENT MANAGEMENT & PUBLISHING']}
          features={categorizedFeatures['WORKFLOW 6: CONTENT MANAGEMENT & PUBLISHING']} 
          priority="Medium"
        />
        
        <WorkflowFeatureTable 
          title="WORKFLOW 7: ANALYTICS, SEO & OPTIMIZATION"
          description={workflowDescriptions['WORKFLOW 7: ANALYTICS, SEO & OPTIMIZATION']}
          features={categorizedFeatures['WORKFLOW 7: ANALYTICS, SEO & OPTIMIZATION']} 
          priority="Medium"
        />
        
        {categorizedFeatures['OTHER FEATURES'].length > 0 && (
          <WorkflowFeatureTable 
            title="OTHER FEATURES"
            description="Features that don't fit into specific workflow categories."
            features={categorizedFeatures['OTHER FEATURES']} 
            priority="Low"
          />
        )}

        {/* Budget & Timeline */}
        <Text style={styles.sectionTitle}>Budget & Timeline</Text>
        <View style={styles.overviewTable}>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Budget Range</Text>
            <Text style={styles.overviewValue}>{data.budget || 'To be finalized after consultation'}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Timeline</Text>
            <Text style={styles.overviewValue}>{data.timeline || 'Flexible'}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.overviewLabel}>Delivery Model</Text>
            <Text style={styles.overviewValue}>Milestone-based</Text>
          </View>
        </View>

        {/* Additional Notes */}
        {data.additionalNotes && (
          <View style={styles.notesSection}>
            <Text style={styles.notesTitle}>Additional Notes</Text>
            <Text style={styles.notesText}>{data.additionalNotes}</Text>
          </View>
        )}

        {/* Acceptance Criteria */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>Acceptance Criteria</Text>
          <Text style={styles.notesText}>
            This PRD will be considered approved when:
            • All features are grouped by workflow
            • Each table clearly explains what is expected
            • Priorities are agreed upon
            • No feature ambiguity remains before quotation or development
          </Text>
        </View>

        {/* Confidentiality Statement */}
        <View style={styles.confidentialityBox}>
          <Text style={styles.confidentialityTitle}>Confidentiality Statement</Text>
          <Text style={styles.confidentialityText}>
            This document contains confidential information and is intended solely for use of the individual or entity to whom it is addressed. Unauthorized distribution or reproduction is prohibited.
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          This document contains confidential information and is intended solely for the use of the individual or entity to whom it is addressed.
        </Text>
      </Page>
    </Document>
  );
};

export default ProjectRequirementPDF;
