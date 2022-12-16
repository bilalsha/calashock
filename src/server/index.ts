import app from './app';
import { config } from './config';

// START THE SERVER
// =============================================================================
app.listen(config.port);
console.log(`App listening on ${config.port}`);
