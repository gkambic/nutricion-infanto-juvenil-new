import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';

const Footer = () => {
  return (
    <Panel className="p-footer">
      <Divider />
      <div style={{ textAlign: 'center', padding: '1em' }}>
        <p>&copy; 2024 My E-learning Platform</p>
        <p>
          Follow us on:
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em' }}>Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em' }}>Twitter</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1em' }}>LinkedIn</a>
        </p>
      </div>
    </Panel>
  );
};

export default Footer;
