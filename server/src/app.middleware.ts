import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { resolve } from 'path';

@Injectable()
export class ServeHTMLMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        if (req.path.includes('graphql')) {
            return next();
        }
    
        // send react index.html
        res.sendFile(resolve(__dirname, 'client', 'build', 'index.html'));
    }
}